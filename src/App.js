import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="invoice">
          <h1>Invoice</h1>
          <p>Invoice#: INVC123</p>
        </div>
        <div className="address">
          <h1>Qest</h1>
          <p>1st Floor Akasa Co-Working</p>
          <p>Siddapura, Whitefield</p>
        </div>
      </div>

      <div className="details">
        <div>
          <h2>Bill To</h2>
          <p>Suban Anwar</p>
          <p>+91 5679870965</p>
        </div>
        <div>
          <h2>Invoice Date</h2>
          <p>12 Dec 2024</p>
        </div>
        <div>
          <h2>Due Date</h2>
          <p>12 Dec 2024</p>
        </div>
      </div>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>Services</th>
            <th>Start Date</th>
            <th>Amount</th>
            <th>Discount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Swimming Class</td>
            <td>12 Jan 25</td>
            <td>₹10,000.00</td>
            <td>₹00.00</td>
            <td>₹10,000.00</td>
          </tr>
        </tbody>
      </table>

      <div className="notes">
        <h2>Notes</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book…
        </p>
      </div>

      <div className="summary">
        <p>Sub Total: ₹10,000.00</p>
        <p>Discount: ₹00.00</p>
        <p className="amount-payable">Amount Payable: ₹10,000.00</p>
        <p className="paid">Paid on 16 Aug 2023: ₹2,500.00</p>
      </div>

      <div className="badge">Partially Paid</div>
    </div>
  );
}

export default App;
