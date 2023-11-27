import Common from "../../../../Components/Common/POSCommon/Common";
import "../../../../assets/css/pos.css"

export default function Refund() {
    return (
        <Common> 
    <div class="page-wrapper ms-0">
      <div class="content" style={{padding: "10px 0"}}>
        <div class="container-fluid pos">
          <div class="pos-content">
            <div class="window">
              <div class="subwindow">
                <div class="subwindow-container">
                  <div class="subwindow-container-fix screens">
                    <div class="ticket-screen screen">
                      <div class="screen-full-width">
                        <div class="rightpane pane-border">
                          <div class="controls">
                            <div class="buttons">
                              <button class="discard">
                                <a href="pos.html">
                                  <span class="search-icon">
                                    <i class="fa fa-angle-double-left"></i>
                                  </span> Back </a>
                              </button>
                              <button class="highlight">
                                <a href="pos.html" class="text-white">New Order</a>
                              </button>
                            </div>
                            <div class="col-md-8">
                              <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search Product Here..."
                                  aria-label="" aria-describedby=""/>
                                <button class="input-group-text" id="">Search</button>
                              </div>
                            </div>
                          </div>
                          <div class="card">
                            <div class="card-body">
                              <div class="row">

                              </div>
                              <table class="table table-bordered display" id="editableTable">
                                <thead>
                                  <tr>
                                    <th>Date</th>
                                    <th>Receipt Number</th>
                                    <th>Customer </th>
                                    <th>Cashier</th>
                                    <th>Total</th>
                                    <th>Status</th>

                                  </tr>
                                </thead>
                                <tbody>
                                  <tr data-id="1">
                                    <td data-field=""></td>
                                    <td data-field=""> </td>
                                    <td data-field=""></td>
                                    <td data-field=""></td>
                                    <td data-field=""></td>
                                    <td data-field=""> <span class="badge bg-success">Paid</span></td>


                                  </tr>

                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div class="leftpane">
                          <div class="order-container">
                            <div class="order-scroller touch-scrollable">
                              <div class="order">
                                <div class="order-empty">
                                  <i class="fa fa-shopping-cart" role="img" aria-label="Shopping cart"
                                    title="Shopping cart"></i>
                                  <h1>Select an order</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="pads">
                            <div class="control-buttons">
                              <div class="control-button">
                                <i class="fa fa-file-pdf-o"></i>
                                <span></span>
                                <span>Invoice</span>
                              </div>
                              <div class="control-button">
                                <i class="fa fa-print"></i>
                                <span></span>
                                <span><a>Print Receipt</a></span>
                              </div>
                            </div>
                            <div class="subpads">
                              <div class="actionpad">
                                <button class="button set-partner">
                                  <a href="customer-list.html">
                                    <i class="fa fa-user" role="img" aria-label="Customer" title="Customer"></i>
                                    Customer </a>
                                </button>
                                <button class="button pay validation pay-order-button">
                                  <div class="pay-circle">
                                    <i class="fa fa-chevron-right" role="img" aria-label="Pay" title="Pay"></i>
                                  </div> Refund
                                </button>
                              </div>
                              <div class="numpad">
                                <button class="input-button number-char">1</button>
                                <button class="input-button number-char">2</button>
                                <button class="input-button number-char">3</button>
                                <button class="mode-button">Qty</button>
                                <button class="input-button number-char">4</button>
                                <button class="input-button number-char">5</button>
                                <button class="input-button number-char">6</button>
                                <button class="mode-button disabled-mode" disabled="">% Disc</button>
                                <button class="input-button number-char">7</button>
                                <button class="input-button number-char">8</button>
                                <button class="input-button number-char">9</button>
                                <button class="mode-button disabled-mode" disabled="">Price</button>
                                <button class="input-button numpad-minus disabled-mode">+/-</button>
                                <button class="input-button number-char">0</button>
                                <button class="input-button number-char">.</button>
                                <button class="input-button numpad-backspace">
                                <img style={{pointerEvents: "none"}} src="" width="24"
                                    height="21" alt="Backspace"/>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </Common>
    )
};
