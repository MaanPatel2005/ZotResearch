import firebase_setup as fb_s
import firebase_admin
from firebase_admin import credentials, storage, firestore

cred = credentials.Certificate("firebase_credentials.json")
# firebase_admin.initialize_app(cred, {
#     'storageBucket': 'gs://hack2024-3e0b1.appspot.com'
# })

db = firestore.client()

# Function to upload file to Firebase Storage and store reference in Firestore
# def upload_file_to_storage_and_firestore(file_path, doc_ref):
#     try:
#         # Upload file to Firebase Storage
#         bucket = storage.bucket()
#         blob = bucket.blob('resumes/' + file_path.split('/')[-1])
#         blob.upload_from_filename(file_path)

#         # Get download URL
#         download_url = blob.generate_signed_url(expiration=600)  # URL expiration time in seconds

#         # Store download URL in Firestore
#         # doc_ref = db.collection('resumes').document()
#         doc_ref.set({
#             'file_name': file_path.split('/')[-1],
#             'download_url': download_url
#         })

#         print('File uploaded to Firebase Storage and reference stored in Firestore')
#     except Exception as e:
#         print('Error uploading file and storing reference:', e)

# # Example usage: Upload file and store reference in Firestore
# file_path = 'path/to/your/file.pdf'
# upload_file_to_storage_and_firestore(file_path)


class AddUser():
    def __init__(self, user: str):
        if user == 'student':
            self.student = True
        else: self.student = False
        self.doc = fb_s.Initializing()
    
    def init_student(self, student_id: str, name: str, email: str):
        if self.student:
            self.doc = self.doc.student_doc.document(student_id)
            self.doc.set(
                {
                    "name": name,
                    "student_id": student_id,
                    "email": email,
                    "portfolio": "",
                    "major": "",
                    "year": 0,
                    "research interest": "",
                    "resume": "",
                    "linkedin": "",
                }
            )
    
    # def update_student_profile(self, major: str, year, portfolio: str, research_interest: str, resume: str, linkedin: str):
    #     if self.student:
    #         self.doc.set(
    #             {
    #                 "portfolio": portfolio,
    #                 "major": major,
    #                 "year": year,
    #                 "research interest": research_interest,
    #                 "resume": resume,
    #                 "linkedin": linkedin,
    #             }
    #         )
    
    def init_advisors(self, advisor_id: str, department: str, publications: str, website: str, position, aos):
        if self.student == False:
            self._doc = self.doc.advisor_doc.document(advisor_id)
            self._doc.set(
                {
                    "UCI NetID": advisor_id,
                    "department": department,
                    "past publications": publications,
                    "website": website,
                    "position": position,
                    "area of study": aos,
                }
            )
    
    # def update_advisor_profile(self, advisor_id: str, position: str, aos: str):
    #     if self.student == False:
    #         self._doc = self.doc.advisor_doc.document(advisor_id)
    #         self._doc.set(
    #             {
    #                 "position": position,
    #                 "area of study": aos,
    #             }
    #         )
    
    def get_doc(self):
        return self.doc




if __name__ == '__main__':
    au = AddUser('student')
    au.init_student('Maan Patel', 'Computer Science', 1)
    au.init_advisors('Professor Thornton', 'Computer Science', 'https://ics.uci.edu/~thornton/ics33', 'https://ics.uci.edu/~thornton')