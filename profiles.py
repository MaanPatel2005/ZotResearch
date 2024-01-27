import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
import adding_user
import firebase_setup as fb_s
from firebase_admin import firestore

def update_student_profile(uid, major: str, year, portfolio: str, research_interest: str, resume: str, linkedin: str):
    user_doc = fb_s.Initializing().student_doc.document(uid)
    user_doc.update(
        {
            "portfolio": portfolio,
            "major": major,
            "year": year,
            "research interest": research_interest,
            "resume": resume,
            "linkedin": linkedin,
        }
    )

def get_student_profile(uid):
    student = firestore.client().collection('students').document(uid)
    return student.get().to_dict()

