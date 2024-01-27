import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth

cred = credentials.Certificate("firebase_credentials.json")
firebase_admin.initialize_app(cred)

def create_user(email, password, ucinetid):
    try:
        user = auth.create_user(
            uid=ucinetid,
            email=email,
            password=password,
            
        )
        print('Successfully created user:', user.uid)
        return user.uid
    except:
        print('Error creating user')
        return None

from firebase_admin import auth

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


# create_user('puravp@uci.edu', 'testpass', "12345678")
sign_in_with_email_and_password('puravp@uci.edu', 'testpass')
