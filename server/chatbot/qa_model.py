from transformers import pipeline
from huggingface_hub import login
from dotenv import load_dotenv
import os

# Load environment variables from the .env file
load_dotenv()

login(token=os.getenv("HUGGING_FACE_TOKEN"))

# Load the question-answering pipeline with the distilbert model
qa_pipeline = pipeline("question-answering", model="distilbert-base-uncased-distilled-squad")

def get_response(question, context):
    # Get the result from the question-answering model
    result = qa_pipeline(question=question, context=context)
    
    # Return the answer (the model returns a dictionary with 'answer' key)
    return result['answer']

