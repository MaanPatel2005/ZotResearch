import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
import adding_user
import firebase_setup as fb_s
from firebase_admin import firestore

def create_opportunity(title, desc, uid):
    user_doc = fb_s.Initializing().advisor_doc.document(uid)
    professor = user_doc.get().to_dict()
    # professor_name = dictionary['name']
    opportunities = firestore.client().collection('opportunities').document(title)
    opportunities.set(
                {
                    "title": title,
                    "name": professor['UCI NetID'],
                    "description": desc,
                }
            )
    user_doc.update({'opportunities': firestore.ArrayUnion(title)})

     
def get_opportunity(title):
    opportunity = firestore.client().collection('opportunities').document(title)
    return opportunity.get().to_dict()

def get_all_opportunities():
    opp_ref = firestore.client().collection('opportunities')
    opp_items = []
    for doc in opp_ref.stream():
        opp_items.append(doc.to_dict())
    return opp_items

def get_opp_by_prof(uid):
    opp_ref = firestore.client().collection('opportunities').where('name', '==' , uid)
    opp_items = []
    for doc in opp_ref.stream():
        opp_items.append(doc.to_dict())
    return opp_items
