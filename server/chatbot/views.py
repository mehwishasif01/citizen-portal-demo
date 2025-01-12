from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .qa_model import get_answer

# Dummy data (context)
CONTEXT = """
The local government office provides various services including tax filing, garbage collection, road maintenance, and public welfare programs. 
Office hours are 9:00 AM to 5:00 PM, Monday to Friday. Contact the office via phone at 123-456-7890 or email at info@localgov.com.
"""
@csrf_exempt
def chatbot_view(request):
    if request.method == 'POST':
        question = request.POST.get('question', '')
        if not question:
            return JsonResponse({'error': 'Question is required'}, status=400)
        
        # Get the answer using the QA model
        answer = get_answer(question, CONTEXT)
        return JsonResponse({'question': question, 'answer': answer})
