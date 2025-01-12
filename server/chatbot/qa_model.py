from transformers import pipeline

# Load pre-trained QA model
qa_pipeline = pipeline("question-answering", model="distilbert-base-uncased-distilled-squad")

def get_answer(question, context):
    result = qa_pipeline(question=question, context=context)
    return result['answer']
