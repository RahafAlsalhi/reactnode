
import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    
    fetch('http://localhost:8000/message')
      .then(response => response.json())
      .then(data => setMessage(data.message));

    fetch('http://localhost:8000/getdata')
      .then(response => response.json())
      .then(data => setData(data));

    fetch('http://localhost:8000/getprice')
      .then(response => response.json())
      .then(data => setPrices(data));
  }, []);

  return (
    <div className="container">
      <h1>React App</h1>
      
     <h3><p>Data: {data ? `Name: ${data.name}, Age: ${data.age}, field:${data.field} `: 'Loading...'}</p></h3>
      <div className="prices">
        {prices ? (
          Object.entries(prices).map(([product, price]) => (
            <div key={product} className="box">
              <p>{product}</p>
              <p class="price" >${price}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;