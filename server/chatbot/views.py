from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from .qa_model import get_response
from .data import GOVERNMENT_CONTEXTS, CITY_CONTEXTS
import json





def contains_city_name(question):
    # List of city names that the system will recognize
    city_names = ["Addison", "Ashville", "Argo"]  # Extend this list as needed
    for city in city_names:
        if city.lower() in question.lower():
            return city
    return None

def get_context_type_from_question(question):
    """
    Extracts the context type based on keywords in the question.
    For example, if the question asks about events, it will return 'events'.
    """
    keywords = {
        "events": "events",
        "contact": "general_info",
        "emergency": "emergency",
        "taxes": "services",
        "public safety": "public_safety",
        "city governance": "city_governance", 
        "transportation": "transportation",
        "transport":"transportation",
        "housing": "housing",
        "general info": "general_info",
        "immigration": "immigration",
        "citizenship": "immigration",
        "green card": "immigration",
        "social security": "social_security",
        "irs": "irs_taxation",
        "taxes": "irs_taxation",
        "veterans affairs": "veterans_affairs",
        "usps": "postal_services",
        "national security": "national_security",
        "fema": "emergency",
        "affordable care act": "healthcare",
        "stimulus check": "stimulus",
        "postal services": "postal_services",
        "maintenance": "maintenance",
        "building permits": "building_permits",
        "education": "education",
        "healthcare": "healthcare",
        "law enforcement": "law_enforcement",
        "state legislation":"state_legislation",
        "state education services":"state_education_services", 
        "tax filing":"tax_filing",
        "garbage collection": "garbage_collection",
        "road maintenance": "road_maintenance",
        "public welfare programs": "public_welfare_programs",
        "city planning": "city_planning",
        "property tax": "property_tax",
        "hazardous waste disposal": "hazardous_waste_disposal",
        "emergency preparedness": "emergency_preparedness",
        "public assistance programs" : "public_assistance_programs"
    }

    question_lower = question.lower()
    
    # Check for keywords in the question
    for keyword, context_type in keywords.items():
        if keyword in question_lower:
            return context_type

    # Default to general_info if no keyword is matched
    return "general_info"

def get_city_context(city_name, context_type):
    """Return context for the city if exists."""
    city_name = city_name.lower()

    city_context = CITY_CONTEXTS.get(city_name)

    if city_context:
        return city_context.get(context_type, "No information available.")
    else:
        return GOVERNMENT_CONTEXTS.get(context_type, "No general information available.")

def extract_city_from_question(question):
    """Extract city name from the user's question using regex or keywords."""
    cities = list(CITY_CONTEXTS.keys())  # Automatically get cities from the dictionary keys
    for city in cities:
        if city in question.lower():
            return city
    return None  # Return None if no city is found


@csrf_exempt
@require_POST
def chatbot_view(request):
    try:
        body = json.loads(request.body.decode('utf-8'))
        question = body.get('question')
        level = body.get('level', 'local').lower()  # Default to 'local' if not provided

        # Validate the question
        if not question:
            return JsonResponse({'error': 'Question is required'}, status=400)

        if "question" in question.lower() and level in GOVERNMENT_CONTEXTS:
          return JsonResponse({'question': question, 'level': level, 'answer': f'How can I help you regarding the {level} Government?'})


        # Identify the city mentioned in the question
        city_name = extract_city_from_question(question)
        
        if city_name:
            # Get the specific context for the city
            context_type = get_context_type_from_question(question)
            context = get_city_context(city_name, context_type)
            answer = get_response(question, context)
        else:
            # If no city is identified, fallback to general government context
            context_type = get_context_type_from_question(question)
            print("context type", context_type)
            context = GOVERNMENT_CONTEXTS.get(level, {}).get(context_type, "No information available.")
            answer = get_response(question, context)
        
        return JsonResponse({'question': question, 'level': level, 'answer': answer}, safe=False)

    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON format'}, status=400)
