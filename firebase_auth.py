import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
import adding_user

cred = credentials.Certificate("firebase_credentials.json")
# firebase_admin.initialize_app(cred)

def create_user(email, password, ucinetid, displayName):
    try:
        user = auth.create_user(
            uid=ucinetid,
            email=email,
            display_name=displayName,
            password=password,
            
        )
        print('Successfully created user:', user.uid)
        s1 = adding_user.AddUser('student')
        print(type(s1))
        s1.init_student(user.uid, user.display_name, user.email)
        return s1
    except Exception as e:
        print(e)
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
data = s1.get_doc().get().to_dict()
print(data['name'])
# sign_in_with_email_and_password('puravp@uci.edu', 'testpass')
