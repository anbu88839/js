
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// App.jsx
import  { useState, useEffect } from 'react';
                 
const API_URL = 'http://localhost:7000';

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '', category: '', stock: '' });

  useEffect(() => {
    fetchProducts(); 
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProducts(data);
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
        category: form.category,
        stock: parseInt(form.stock)
      })
    });
    setForm({ name: '', description: '', price: '', category: '', stock: '' });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchProducts();
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">Product Manager</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="mb-2"><input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="form-control" required /></div>
        <div className="mb-2"><input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="form-control" /></div>
        <div className="mb-2"><input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="form-control" required /></div>
        <div className="mb-2"><input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="form-control" required /></div>
        <div className="mb-2"><input name="stock" type="number" value={form.stock} onChange={handleChange} placeholder="Stock" className="form-control" required /></div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>

      <ul className="list-group">
        {products.map(product => (
          <li key={product._id} className="list-group-item d-flex justify-content-between align-items-start">
            <div>
              <h5>{product.name} - ${product.price}</h5>
              <div><small>{product.category} | Stock: {product.stock}</small></div>
              <div><em>{product.description}</em></div>
            </div>
            <button onClick={() => handleDelete(product._id)} className="btn btn-danger btn-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App