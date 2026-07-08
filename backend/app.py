from flask import Flask, request, jsonify
from flask_cors import CORS
from database import db

app = Flask(__name__)
CORS(app)

projects = db["projects"]
contacts = db["contacts"]


@app.route("/")
def home():
    return "Portfolio Backend Running Successfully"


@app.route("/projects", methods=["GET"])
def get_projects():

    data = list(projects.find({}, {"_id": 0}))

    return jsonify(data)


@app.route("/contact", methods=["POST"])
def contact():

    data = request.json

    contacts.insert_one(data)

    return jsonify({
        "message": "Message Sent Successfully"
    })


if __name__ == "__main__":
    app.run(debug=True)