from huggingface_hub import login, InferenceClient
from dotenv import load_dotenv

import os

# Load environment variables from the .env file
load_dotenv()
token=os.getenv("HUGGING_FACE_TOKEN")
login(token=token)

def get_response(question, context):
    # Load the question-answering pipeline with the distilbert model
    client = InferenceClient(model="distilbert-base-uncased-distilled-squad", token=token)
    # Get the result from the question-answering model
    response = client.question_answering(question=question, context=context)
    return response['answer']

