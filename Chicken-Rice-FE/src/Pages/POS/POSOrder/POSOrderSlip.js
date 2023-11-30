import React from 'react';
import { useLocation } from 'react-router-dom';
export default function POSOrderSlipt(){
    const location = useLocation();
    const { state } = location;
    const totalAmounts = state.totalAmounts;
    const Paymentslipt = state.payment;
    const totalAmount = totalAmounts.totalAmount;
    console.log("totalAmounts",totalAmount)

  return (
    <div id="invoice-POS">
      <div id="top" style={{ textAlign: 'center' }}>
         <div> <img src="/photo/favicon.png" style={{ height: '50%' }} alt="Logo" /></div>
        <div className="info">
          <h2>Mr. Chicken Rice</h2>
          <ul>
            <li><i className="fa fa-envelope"></i> chikenrice@mail.com</li>
            <li><i className="fas fa-map-pin"></i> Unit No: 72, Yishun Singapore 712222</li>
          </ul>
        </div>
      </div>

      <div id="mid">
        <div className="info">
          <h2>Billing Info</h2>
          <div className="leftside">
            <p>Bill NO:</p><br />
            <p>Order ID:</p><br />
            <p>Table NO:</p><br />
            <p>Token NO:</p><br />
            <p>Payment Mode:</p><br />
            <p>Date</p>
          </div>
          <div className="rightside">
            <p>#0036589</p><br />
            <p>#56983</p><br />
            <p>22</p><br />
            <p>35</p><br />
            <p>Cash</p><br />
            <p>10/07/2023</p>
          </div>
        </div>
      </div>

      <div id="bot">
        <div id="table">
          <table>
            <thead>
              <tr className="tabletitle">
                <td className="item"><h2>Item</h2></td>
                <td className="Hours"><h2>Qty</h2></td>
                <td className="Rate"><h2>Sub Total</h2></td>
              </tr>
            </thead>
            <tbody>
            {Paymentslipt.map((item) => (
  <tr className="service"  key={item.productId}>
      <td className="tableitem"><p className="itemtext">{item.productName}</p></td>
      <td className="tableitem"><p className="itemtext">{item.quantity}</p></td>
      <td className="tableitem"><p className="itemtext">${item.totalPrice.toFixed(2)}</p></td>
              </tr>  ))}

              {/* Add more rows as needed */}
            </tbody>
            <tfoot>
              <tr className="tabletitle">
                <td></td>
                <td className="Rate"><h2>tax</h2></td>
                <td className="payment"><h2>$0.0</h2></td>
              </tr>
              <tr className="tabletitle">
                <td></td>
                <td className="Rate"><h2>Total</h2></td>
                <td className="payment"><h2>${totalAmount}</h2></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div id="legalcopy">
          <p className="legal"><strong>Thank you for your business!</strong> Please Visit Again</p>
        </div>
      </div>

      <div className="print-button" style={{ textAlign: 'center', marginTop: '15px' }}>
        <button className="btn btn-default" style={{ padding: '10px' }}>Print This Receipt</button>
      </div>
    </div>
  );
};

