# import flask
from flask import Flask

# initilize flask
app = Flask(__name__)


# setup the route
@app.route('/')
def index():
    return "Hello, World!"

# run the server
if __name__ == '__main__':
    app.run(debug=True)

# boom!
