from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def route_index():
    return render_template('index.html')


@app.route('/game')
def route_game():
    return render_template('game.html')

@app.route('/end')
def route_end_game():
    return render_template('end.html')

if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
    )
