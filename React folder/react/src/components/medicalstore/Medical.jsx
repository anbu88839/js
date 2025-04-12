import React, { useState, useEffect } from 'react';
// import './Medical.css';

const Medical = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [quantity, setQuantity] = useState(1); 
  const [selectedProduct, setSelectedProduct] = useState("");


  useEffect(() => {
    fetch("http://localhost:5000/medicines")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching data:", error));

    const savedCart = JSON.parse(localStorage.getItem('products')) || [];
    setCart(savedCart);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCart = () => {
    if (!selectedProduct) return;

    const product = products.find(p => p.name === selectedProduct);
    if (!product) return;

    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(item => item.name === product.name);

    if (existingProductIndex > -1) {
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }

    setCart(updatedCart);
    localStorage.setItem('products', JSON.stringify(updatedCart));
  };

  const handleSubmit = () => {
    if (!customerName || cart.length === 0) {
      alert("Please fill the customer name and add products to the cart.");
      return;
    }
    alert(`Order submitted for ${customerName}`);
    setCart([]);
    localStorage.removeItem('products'); 
  };

  const handleRemove = (productName) => {
    const updatedCart = cart.filter(item => item.name !== productName);
    setCart(updatedCart);
    localStorage.setItem('products', JSON.stringify(updatedCart));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div id="store">
        <h1>Medical Store</h1>
        <form>
          <label htmlFor="search">Search:</label>
          <input type="text" placeholder="Search box" onChange={e => setSearch(e.target.value)} value={search} />
          <br />
          <label htmlFor="product">Product:</label><br />
          <select name="product" id="product" value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
            <option value="">Select Product</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={quantity}
            onChange={e => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
            min="1"
          />
          <br />
          <label htmlFor="customer">Customer Name:</label>
          <input
            type="text"
            name="customer"
            placeholder="Enter customer name"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
            required
          />
        </form>

        <div id="btn">
          <button onClick={handleCart}>Add to Cart</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <div id="cart">
        <h1>Cart</h1>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <table id="carttable">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemove(item.name)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div id="totalAmount">
          <h2>Total Bill Amount: ₹{totalAmount.toFixed(2)}</h2>
        </div>

        {
          bill && (
            <div>
              <h2>Bill No :{}</h2>
            </div>
          )
        }
      </div>

      {search && (
        <div id="details">
          <h1>Product List</h1>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Status</th>
                <th>Stock</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    {product.stock > 0 ? (
                      <span style={{ color: "green" }}>In Stock</span>
                    ) : (
                      <span style={{ color: "red" }}>Out of Stock</span>
                    )}
                  </td>
                  <td>{product.stock}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Medical;