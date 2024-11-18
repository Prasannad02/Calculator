from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    try:
        expression = data.get('expression')
        result = eval(expression)  # Use eval cautiously
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": "Invalid expression"}), 400

if __name__ == '__main__':
    app.run(debug=True)
