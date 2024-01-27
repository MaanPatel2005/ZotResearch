from flask import Flask, request, jsonify
import firebase_auth
import opportunities
import profiles
from flask_cors import CORS


# Initialize Flask application
app = Flask(__name__)
CORS(app)
# # Define API endpoints
# @app.route('/api/hello', methods=['GET'])
# def hello():
#     return jsonify({'message': 'Hello, world!'})

# @app.route('/api/add', methods=['POST'])
# def add_numbers():
#     data = request.json
#     num1 = data.get('num1')
#     num2 = data.get('num2')
#     result = num1 + num2
#     return jsonify({'result': result})

@app.route('/api/create_account/', methods=['POST'])
def create_user():
    data = request.json
    uid = data.get('uid')
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    user = firebase_auth.create_user(email, password, uid, name)
    return jsonify({'user': user.get_doc()})

@app.route('/api/student_login/', methods = ['POST'])
def student_login():
    data = request.json
    email = data.get('username')
    password = data.get('password')
    print(email, password)
    user = firebase_auth.sign_in_with_email_and_password(str(email), str(password), True)
    response = jsonify({'uid': user.get().to_dict()['student_id']})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/api/prof_login/', methods = ['POST'])
def prof_login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    user = firebase_auth.sign_in_with_email_and_password(email, password, False)
    return jsonify({'uid': user.get_doc().get().to_dict()['UCI NetID']})

@app.route('/api/create_opportunity/', methods = ['POST'])
def create_opportunity():
    data = request.json
    title = data.get('title')
    desc = data.get('desc')
    uid = data.get('uid')
    opportunities.create_opportunity(title, desc, uid)
    return '', 204

@app.route('/api/get_opportunities/', methods = ['POST'])
def get_all_opportunities():
    return jsonify(opportunities.get_all_opportunities())

@app.route('/api/update_student_profile/', methods = ['POST'])
def update_student_profile():
    data = request.json()
    portfolio = data.get('portfolio')
    major = data.get('major')
    year = data.get('major')
    research = data.get('research')
    resume = data.get('resume')
    linkedin = data.get('linkedin')
    uid = data.get('uid')
    description = data.get('desc')
    degree = data.get('degree')
    profiles.update_student_profile(uid, major, year, portfolio, research, resume, linkedin, description, degree)
    return '', 204

@app.route('/api/get_student_profile/', methods = ['POST'])
def get_student_profile():
    data = request.json
    return jsonify(profiles.get_student_profile(data.get('uid')))
    # return jsonify((data.get('uid')))


@app.route('/api/get_prof_opps/', methods = ['POST'])
def get_opp_by_prof():
    data = request.json()
    return jsonify(opportunities.get_opp_by_prof(data.get('uid')))



@app.route('/')
def test_user_info():
    # user = firebase_auth.sign_in_with_email_and_password('puravp@uci.edu', 'testpass', True)
    # user = firebase_auth.create_user('testmail@gmail.com', 'password', 'testmail', 'testuser')
    # user_info = user.get_doc().get().to_dict()
    # opportunities.create_opportunity('Test Opportunity', 'This is a test.', 'Test Prof')
    # opp = opportunities.get_opportunity('Test Opportunity')
    return jsonify(opportunities.get_opp_by_prof("Test Prof"))
    return jsonify({'user': str(user)})



# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
