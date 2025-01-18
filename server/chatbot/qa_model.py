from transformers import pipeline


# Load the question-answering pipeline with the distilbert model
qa_pipeline = pipeline("question-answering", model="distilbert-base-uncased-distilled-squad")

def get_response(question, context):
    # Get the result from the question-answering model
    result = qa_pipeline(question=question, context=context)
    
    # Return the answer (the model returns a dictionary with 'answer' key)
    return result['answer']

