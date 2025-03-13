from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
products = [
    {'id': 1, 'name': 'Product 1', 'description': 'Description 1', 'price': 10.0},
    {'id': 2, 'name': 'Product 2', 'description': 'Description 2', 'price': 20.0},
]

@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/api/products', methods=['POST'])
def create_product():
    new_product = request.json
    new_product['id'] = len(products) + 1
    products.append(new_product)
    return jsonify(new_product), 201

if __name__ == '__main__':
    app.run(debug=True)
