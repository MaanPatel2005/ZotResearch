import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# Use the private key file of the service account directly.
cred = credentials.Certificate("firebase_credentials.json")
app = firebase_admin.initialize_app(cred)
firestore_client = firestore.client()


class Initializing():
    def __init__(self):
        self.student_doc = firestore_client.collection("students")
        self.advisor_doc = firestore_client.collection("advisors")
    
    def init_student(self):
        self.doc_ref.document('Purav Patel')
        self.doc_ref.set(
            {
                "name": "Purav Patel",
                "major": "Computer Science",
                "year": 1,
            }
        )

    def init_professor(self):
        self.doc_ref2.document('Professor Gassko')
        self.doc_ref2.set (
            {
                "name": "Irene Gassko",
                "study": "Computer Science Logic",
                "current_project": "6D Homework"
            } 
        )