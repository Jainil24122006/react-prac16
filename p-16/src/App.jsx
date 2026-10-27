
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [products, setProducts] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
      quantity: quantity
    };

    setProducts([...products, newProduct]);

    setName('');
    setPrice('');
    setQuantity('');
  }

  return (
    <div>
      <h1>Product Management</h1>

      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit}>
        <label>Product Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <label>Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />

        <br /><br />

        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          required
        />

        <br /><br />

        <button type="submit">Add Product</button>
      </form>

      <hr />

      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <p>Product Name: {product.name}</p>
            <p>Price: ₹{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
