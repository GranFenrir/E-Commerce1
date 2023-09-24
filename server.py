# use flask
from flask import Flask, request

import datetime
import jwt

app = Flask(__name__)

# create users array that stores users statically
users = {
    "emre": {
        "username": "emre",
        "password": "Emre3131sj"
    }
}

# create a login route for creating json web tokens
@app.route("/api/login")
def login():
    # get username from request. if username exists in users array, create and return a json web token
    username = request.form["username"]
    if username in users:
        token_data = {
            "username": username,
            "iat": datetime.datetime.utcnow(), # iat = issued at
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60) # exp = expiration
        }

        # create json web token using token_data
        token = jwt.encode(token_data, "annen123321")
        print(token)
        

# start app
if __name__ == "__main__":
    app.run(debug=True)