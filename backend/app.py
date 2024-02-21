from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['blood_bank']  # Create or connect to the database
users_collection = db['users']  # Create or connect to the users collection

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    user = users_collection.find_one({'username': username})
    if user and user['password'] == password:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}),

@app.route('/fundraise', methods=['POST'])
def fundraise():
    data = request.get_json()
    title = data.get('title')
    description = data.get('description')
    target_amount = data.get('target_amount')
    # Add more fields as needed

    if not title or not description or not target_amount:
        return jsonify({'error': 'Missing required fields'}), 400

    fundraiser_data = {
        'title': title,
        'description': description,
        'target_amount': target_amount,
        # Add more fields as needed
    }

    # Store the fundraiser data in MongoDB
    db['fundraisers'].insert_one(fundraiser_data)
    
    return jsonify({'message': 'Fundraiser created successfully'}), 201
@app.route('/donate', methods=['POST'])
def donate():
    data = request.get_json()
    name = data.get('name')
    blood_group = data.get('blood_group')
    location = data.get('location')
    # Add more fields as needed

    if not name or not blood_group or not location:
        return jsonify({'error': 'Missing required fields'}), 400

    donation_data = {
        'name': name,
        'blood_group': blood_group,
        'location': location,
        # Add more fields as needed
    }

    # Store the donation data in MongoDB
    db['donations'].insert_one(donation_data)
    
    return jsonify({'message': 'Donation recorded successfully'}), 201

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    blood_group = data.get('blood_group')

    if not username or not password or not blood_group:
        return jsonify({'error': 'Missing username, password, or blood group'}), 400

    if users_collection.find_one({'username': username}):
        return jsonify({'error': 'Username already exists'}), 400

    user_data = {
        'username': username,
        'password': password,
        'blood_group': blood_group
    }

    users_collection.insert_one(user_data)
    
    return jsonify({'message': 'Registration successful'}), 201

if __name__ == '__main__':
    app.run(debug=True)
