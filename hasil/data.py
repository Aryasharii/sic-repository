from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/data', methods=['POST'])
def handle_data():
    data = request.json
    temperature = data.get('temperature')
    humidity = data.get('humidity')
    # Lakukan sesuatu dengan data yang diterima
    print("Temperature:", temperature)
    print("Humidity:", humidity)
    # Beri respons jika diperlukan
    return jsonify({"message": "Data received successfully!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
