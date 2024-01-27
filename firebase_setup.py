import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the private key file of the service account directly.
cred = credentials.Certificate("firebase_credentials.json")
app = firebase_admin.initialize_app(cred)
firestore_client = firestore.client()

doc_ref = firestore_client.collection("students").document("Purav Patel")
doc_ref.set(
    {
        "name": "Purav Patel",
        "major": "Computer Science",
        "year": 1,
    }
)