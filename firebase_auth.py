import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
import adding_user

cred = credentials.Certificate("firebase_credentials.json")
firebase_admin.initialize_app(cred)

def create_user(email, password, ucinetid, displayName):
    try:
        user = auth.create_user(
            uid=ucinetid,
            email=email,
            displayName=displayName,
            password=password,
            
        )
        print('Successfully created user:', user.uid)
        s1 = adding_user.AddUser('student')
        s1.init_student(user.uid, user.displayName, user.email)
        return s1
    except:
        print('Error creating user')
        return None

def sign_in_with_email_and_password(email, password):
    try:
        user = auth.get_user_by_email(email)
        if user:
            # Attempt to sign in the user with email and password
            user = auth.get_user_by_email(email)
            if user:
                signed_in_user = auth.update_user(
                    user.uid,
                    email=email,
                    password=password
                )
                print('Successfully signed in user:', signed_in_user.uid)
                return signed_in_user.uid
        else:
            print('User not found')
            return None
    except auth.UserNotFoundError:
        print('User not found')
        return None
    except Exception as e:
        print('Error signing in:', e)
        return None


s1 = create_user('puravp@uci.edu', 'testpass', "puravp", 'Purav Patel')
print(s1.get_doc().get('name'))
# sign_in_with_email_and_password('puravp@uci.edu', 'testpass')
