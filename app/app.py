# import flask
from flask import Flask, render_template, request

# initilize flask
app = Flask(__name__)


# setup the route
@app.route('/hello')
def hello():
    return "Hello, World!"


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        value_one = int(request.form['number-one'])
        value_two = int(request.form['number-two'])
        total = value_one + value_two
        return render_template('index.html', value=total)
    return render_template('index.html')

# run the server
if __name__ == '__main__':
    app.run(debug=True)

# boom!
