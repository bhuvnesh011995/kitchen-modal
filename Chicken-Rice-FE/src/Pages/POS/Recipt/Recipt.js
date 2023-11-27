import "./Recipt.css"

export default function Recipt() {
    return (
        <>
        <div id="invoice-POS">

    <div id="top" style={{textAlign: "center"}}>
      <div class="logo"></div>
      <div class="info">
        <h2>Mr. Chicken Rice</h2>
        <ul>
          <li><i class="fa fa-envelope"></i> chikenrice@mail.com</li>
          <li><i class="fas fa-map-pin"></i> Unit No: 72, Yishun Singapore 712222</li>
        </ul>
      </div>
      {/* <!--End Info--> */}
    </div>
    {/* <!--End InvoiceTop--> */}

    <div id="mid">
      <div class="info">
        <h2>Billing Info</h2>
        <div class="leftside">
          <p>
            Bill NO:
          </p>
          <br />
          <p>
            Order ID:
          </p>
          <br />
          <p>
            Table NO:
          </p>
          <br />
          <p>Token NO:</p>
          <br />
          <p>Payment Mode:</p> <br />
          <p>Date</p>
        </div>
        <div class="rightside">
          <p>
            #0036589
          </p><br />
          <p>#56983</p> <br />
          <p>22</p> <br />
          <p>35</p> <br />
          <p>Cash</p> <br />
          <p>10/07/2023</p>
        </div>
      </div>
    </div>
    {/* <!--End Invoice Mid--> */}

    <div id="bot">

      <div id="table">
        <table>
          <tr class="tabletitle">
            <td class="item">
              <h2>Item</h2>
            </td>
            <td class="Hours">
              <h2>Qty</h2>
            </td>
            <td class="Rate">
              <h2>Sub Total</h2>
            </td>
          </tr>

          <tr class="service">
            <td class="tableitem">
              <p class="itemtext">Chicken Manchurian</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">5</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">$375.00</p>
            </td>
          </tr>

          <tr class="service">
            <td class="tableitem">
              <p class="itemtext">Mixed Chicken Noodles</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">3</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">$225.00</p>
            </td>
          </tr>

          <tr class="service">
            <td class="tableitem">
              <p class="itemtext">Spicy Chili Chicken</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">5</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">$375.00</p>
            </td>
          </tr>

          <tr class="service">
            <td class="tableitem">
              <p class="itemtext">Orange Juice</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">20</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">$1500.00</p>
            </td>
          </tr>

          <tr class="service">
            <td class="tableitem">
              <p class="itemtext">Chicken Biryani</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">10</p>
            </td>
            <td class="tableitem">
              <p class="itemtext">$750.00</p>
            </td>
          </tr>


          <tr class="tabletitle">
            <td></td>
            <td class="Rate">
              <h2>tax</h2>
            </td>
            <td class="payment">
              <h2>$419.25</h2>
            </td>
          </tr>

          <tr class="tabletitle">
            <td></td>
            <td class="Rate">
              <h2>Total</h2>
            </td>
            <td class="payment">
              <h2>$3,644.25</h2>
            </td>
          </tr>

        </table>
      </div>
      {/* <!--End Table--> */}

      <div id="legalcopy">
        <p class="legal"><strong>Thank you for your business!</strong>  Please Visit Again
        </p>
      </div>

    </div>
    {/* <!--End InvoiceBot--> */}

  </div>
{/*   <!--End Invoice--> */}
  <div class="print-button" style={{textAlign: "center", marginTop: "15px"}}>
    <button class="btn btn-default" style={{padding: "10px"}}>Print This Receipt</button>
  </div>
  </>
    )
};
