# imports
from flask import Flask, render_template, request, jsonify
import requests


# initilize flask
app = Flask(__name__)


# routes

@app.route('/hello')
def hello():
    return "Hello, World!"


# @app.route('/', methods=['GET', 'POST'])
# def home():
#     if request.method == 'POST':
#         value_one = int(request.form.get('first'))
#         value_two = int(request.form.get('second'))
#         total = value_one + value_two
#         data = {"total": str(total)}
#         return jsonify(data)
#     return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # user inputs
        first = request.form.get('first')
        second = request.form.get('second')
        # api call
        url = "https://api.github.com/search/users?q=location:{0}+language:{1}".format(first, second)
        response_dict = requests.get(url).json()
        # return json
        return jsonify(response_dict)
    return render_template('index.html')


# run the server
if __name__ == '__main__':
    app.run(debug=True)

# boom!
