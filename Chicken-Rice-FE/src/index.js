import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes, useRouteError } from "react-router-dom";
import Common from "./Components/Common/Common";
import Login from "./Pages/Login/Login";
import Practice from "./practice";
import Dashboard from "./Pages/Dashboard/Dashboard";
import IncommingOrders from "./Pages/KitchenManagement/IncommingOrders/IncommingOrders";
import OrderQueue from "./Pages/KitchenManagement/OrderQueue/OrderQueue";
// import Recipe from './Pages/KitchenManagement/Recipe/Recipe';
import QrManagement from "./Pages/Orders/QrManagement/QrManagement";
import MenuManagement from "./Pages/Orders/MenuManagement/MenuManagement";
import OrderProcessing from "./Pages/Orders/OrderProcessing/OrderProcessing";
import Report from "./Pages/Orders/Report/Report";
import SalesOrder from "./Pages/Finance/SalesOrder/SalesOrder";
import Invoicing from "./Pages/Finance/Invoicing/Invoicing";
import LogManagement from "./Pages/Finance/LogManagement/LogManagement";
import FixedAssets from "./Pages/Finance/FixedAssets/FinedAssets";
import StoreCosting from "./Pages/Finance/StoreCosting/StoreCosting";
import Requisition from "./Pages/Purchase/Requisition/Requisition";
import Order from "./Pages/Purchase/Order/Order";
import Expense from "./Pages/Purchase/Expense/Expense";
import Supplier from "./Pages/Purchase/Supplier/Supplier";
import HRMS from "./Pages/HRMS/HRMS";
import Employees from "./Pages/HRMS/Employees/Employees";
import RoleAndPrivillage from "./Pages/HRMS/RoleAndPrivillage/RoleAndPrivillage";
import AuthProvider from "./Context/AuthContext";
import PosDashboard from "./Pages/POS/Dashboard/Dashboard";
import TablesManagement from "./Pages/POS/Setting/Tables/TablesManagement";
import SalesReport from "./Pages/POS/SalesReport/SalesReport";
import InvoicingPos from "./Pages/POS/Invoicing/Invoicing";
import CashInOut from "./Pages/POS/Setting/Tables/CashInUOut/CashInOut";
import Floor from "./Pages/POS/Setting/Floor/Floor";
import Customer from "./Pages/POS/Customer/Customer";
import Transaction from "./Pages/POS/Setting/Transaction/Transaction";
import Recipt from "./Pages/POS/Recipt/Recipt";
import SettingOrder from "./Pages/POS/Setting/SettingOrder/SettingOrder";
import ErrorPage from "./Components/Common/ErrorPage";
import Checkout from "./Pages/POS/OtherPages/Checkout/Checkout";
import Invoice from "./Pages/POS/OtherPages/Invoicies/Invoice";
import Refund from "./Pages/POS/OtherPages/Refund/Refund";
import POS from "./Pages/POS/OtherPages/POS/POS";
import ProductModal from "./Pages/POS/OtherPages/POS/ProductModal";

import Category from "./Pages/KitchenManagement/Category/Category";
import Recipe from "./Pages/KitchenManagement/Recipes/Recipe";
import Addons from "./Pages/KitchenManagement/Addons/Addons";
import Orders from "./Pages/KitchenManagement/Order/Order";
import MobileOrder from "./Pages/KitchenManagement/Order/MobileOrder";
import PosOrder from "./Pages/KitchenManagement/Order/PosOrder";
import QrBuilder from "./Pages/Orders/MenuManagement/QrBuilder/QrBuilder";
import QrCodeGenerator from "./Pages/Orders/MenuManagement/QrBuilder/QrCodeGenerate";
import GeneralSetting from "./Pages/SetupConfigration/GeneralSetting";
import FeaturesActivation from "./Pages/SetupConfigration/FeaturesActivation";
import Language from "./Pages/SetupConfigration/Language/Language";
import Currency from "./Pages/SetupConfigration/Currency/Currency";
import Tax from "./Pages/SetupConfigration/AllTaxes.js/tax";
import PickupPoint from "./Pages/SetupConfigration/PickupPoint/PickupPoint";
import SMPTSetting from "./Pages/SetupConfigration/SMPTSetting/SMPTSetting";
import PaymentMethod from "./Pages/SetupConfigration/PaymentMethods/PaymentMethod";
import FileSystemCredentials from "./Pages/SetupConfigration/FileSystemCnfigurations/FileSystemConfigurations";
import SocialLogin from "./Pages/SetupConfigration/SocialMediaLogin/SocialLogin";
import AnalyticsTools from "./Pages/SetupConfigration/AnalyticsTools/AnalyticsTools";
import GoogleRecaptchaSettings from "./Pages/SetupConfigration/GooglereCAPTCHASetting/GooglereCAPTCHASetting";
import StartSession from "./Pages/POS/POSOrder/StartSession";
import POSMain from "./Pages/POS/POSOrder/POSMain";
import POSOrderSlipt from "./Pages/POS/POSOrder/POSOrderSlip";
import QueueDisplay from "./Pages/KitchenManagement/queueDisplay/queueDisplay";
import { CartProvider } from "./Pages/POS/POSOrder/Reducer";
import KitchenScreen from "./Pages/KitchenScreen/KitchenScreen";
import { ToastContainer } from "react-toastify";
import POSCheckOut from "./Pages/POSMobileScreen/POSCheckOut/POSCheckOut";
import "react-toastify/dist/ReactToastify.css";
import POSCheckOut from "./Pages/POSMobileScreen/POSCheckOut/POSCheckOut";
import AddPOS from "./Pages/POSMobileScreen/AddPOS";
import AddOnPos from "./Pages/POSMobileScreen/POSCheckOut/AddOnPos";
import MenuComponent from "./Pages/POSMobileScreen/POSCheckOut/MenuPOS";
import Check from "./Pages/POSMobileScreen/POSCheckOut/Check";
import OrderSummary from "./Pages/POSMobileScreen/POSCheckOut/OrderSummary";
import PaymentCheckOut from "./Pages/POSMobileScreen/POSCheckOut/PaymentCheckOut";
import SettingProvider from "./Context/SettingContext";
import AddPOS from "./Pages/POSMobileScreen/AddPOS";
import AddOnPos from "./Pages/POSMobileScreen/POSCheckOut/AddOnPos";
import MenuComponent from "./Pages/POSMobileScreen/POSCheckOut/MenuPOS";
import Check from "./Pages/POSMobileScreen/POSCheckOut/Check";
import OrderSummary from "./Pages/POSMobileScreen/POSCheckOut/OrderSummary";
import PaymentCheckOut from "./Pages/POSMobileScreen/POSCheckOut/PaymentCheckOut";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <SettingProvider>
      <ToastContainer />
      <AuthProvider>
        <CartProvider>
          <HashRouter>
            <Routes>
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/"
                element={<Dashboard />}
                errorElement={<ErrorPage />}
              />

              <Route
                path="/management/incommingOrders"
                element={
                  <Common>
                    <IncommingOrders />
                  </Common>
                }
              />
              <Route
                path="/management/orderQueue"
                element={
                  <Common>
                    <OrderQueue />
                  </Common>
                }
              />

              <Route
                path="/management/category"
                element={
                  <Common>
                    {" "}
                    <Category />
                  </Common>
                }
              />
              <Route
                path="/management/recipe"
                element={
                  <Common>
                    <Recipe />
                  </Common>
                }
              />
              <Route
                path="/management/addons"
                element={
                  <Common>
                    <Addons />
                  </Common>
                }
              />
              <Route
                path="/order/allOrder"
                element={
                  <Common>
                    <Orders />
                  </Common>
                }
              />
              <Route
                path="/order/posOrder"
                element={
                  <Common>
                    <PosOrder />
                  </Common>
                }
              />
              <Route
                path="/order/mobileOrder"
                element={
                  <Common>
                    <MobileOrder />
                  </Common>
                }
              />

              <Route path="/order-details" element={<KitchenScreen />} />
              <Route
                path="/qrbuilder"
                element={
                  <Common>
                    <QrBuilder />
                  </Common>
                }
              />
              <Route
                path="/qrcodegenerator"
                element={
                  <Common>
                    <QrCodeGenerator />
                  </Common>
                }
              />
              {/* <Route path='/management/recipe' element={<Common><Recipe/></Common>}/> */}
              <Route
                path="/order/qrManagement"
                element={
                  <Common>
                    <QrManagement />
                  </Common>
                }
              />
              <Route
                path="/order/menuManagement"
                element={
                  <Common>
                    <MenuManagement />
                  </Common>
                }
              />
              <Route
                path="/order/orderProcessing"
                element={
                  <Common>
                    <OrderProcessing />
                  </Common>
                }
              />
              <Route
                path="/order/report"
                element={
                  <Common>
                    <Report />
                  </Common>
                }
              />
              <Route
                path="/finance/salesOrder"
                element={
                  <Common>
                    <SalesOrder />
                  </Common>
                }
              />
              <Route
                path="/finance/invoicing"
                element={
                  <Common>
                    <Invoicing />
                  </Common>
                }
              />
              <Route
                path="/finance/logManagement"
                element={
                  <Common>
                    <LogManagement />
                  </Common>
                }
              />
              <Route
                path="/finance/ficedAssets"
                element={
                  <Common>
                    <FixedAssets />
                  </Common>
                }
              />
              <Route
                path="/finance/storeCosting"
                element={
                  <Common>
                    <StoreCosting />
                  </Common>
                }
              />
              <Route
                path="/purchase/requisition"
                element={
                  <Common>
                    <Requisition />
                  </Common>
                }
              />
              <Route
                path="/purchase/order"
                element={
                  <Common>
                    <Order />
                  </Common>
                }
              />
              <Route
                path="/purchase/expense"
                element={
                  <Common>
                    <Expense />
                  </Common>
                }
              />
              <Route
                path="/purchase/supplier"
                element={
                  <Common>
                    <Supplier />
                  </Common>
                }
              />
              <Route
                path="/HRMS"
                element={
                  <Common sidebar={"HRMS"}>
                    <HRMS />
                  </Common>
                }
              />
              <Route
                path="/HRMS/staff/employee"
                element={
                  <Common sidebar={"HRMS"}>
                    <Employees />
                  </Common>
                }
              />
              <Route
                path="/HRMS/staff/roles&privillage"
                element={
                  <Common sidebar={"HRMS"}>
                    <RoleAndPrivillage />
                  </Common>
                }
              />
              {/* <Route path="practice" element={<Practice/>}/> */}

              <Route path="/queuedisplay" element={<QueueDisplay />} />
              <Route path="/addpos" element={<AddPOS />} />
              <Route path="/menucomponent" element={<MenuComponent />} />
              <Route path="/addonpos" element={<AddOnPos />} />
              <Route path="/check" element={<Check />} />
              <Route path="/ordersummary" element={<OrderSummary />} />
              <Route path="/paymentcheckout" element={<PaymentCheckOut />} />

              <Route path="/pos/dashboard" element={<PosDashboard />} />
              <Route path="/pos/productmodal" element={<ProductModal />} />

              <Route
                path="/pos/setting/tables"
                element={<TablesManagement />}
              />
              <Route path="/pos/salesReport" element={<SalesReport />} />
              <Route path="/pos/invoicing" element={<InvoicingPos />} />
              <Route path="/pos/setting/cashInOut" element={<CashInOut />} />
              <Route path="/pos/setting/floor" element={<Floor />} />
              <Route path="/pos/customer" element={<Customer />} />
              <Route
                path="/configration/generalsetting"
                element={
                  <Common>
                    <GeneralSetting />
                  </Common>
                }
              />
              <Route
                path="/configration/feacturesactivation"
                element={
                  <Common>
                    <FeaturesActivation />
                  </Common>
                }
              />
              <Route
                path="/configration/language"
                element={
                  <Common>
                    <Language />
                  </Common>
                }
              />
              <Route
                path="/configration/currency"
                element={
                  <Common>
                    <Currency />
                  </Common>
                }
              />
              <Route
                path="/configration/taxes"
                element={
                  <Common>
                    <Tax />
                  </Common>
                }
              />
              <Route
                path="/configration/pickuppoint"
                element={
                  <Common>
                    <PickupPoint />
                  </Common>
                }
              />
              <Route
                path="/configration/smptsetting"
                element={
                  <Common>
                    <SMPTSetting />
                  </Common>
                }
              />
              <Route
                path="/configration/paymentmethods"
                element={
                  <Common>
                    <PaymentMethod />
                  </Common>
                }
              />
             
              
             
              
              
              
              
              
              <Route
                path="/configration/filesystemcredentials"
                element={
                  <Common>
                    <FileSystemCredentials />
                  </Common>
                }
              />
              <Route
                path="/configration/sociallogin"
                element={
                  <Common>
                    <SocialLogin />
                  </Common>
                }
              />
              <Route
                path="/configration/analyticstools"
                element={
                  <Common>
                    <AnalyticsTools />
                  </Common>
                }
              />
              <Route
                path="/configration/googleRecaptchasettings"
                element={
                  <Common>
                    <GoogleRecaptchaSettings />
                  </Common>
                }
              />
              <Route path="/pos/poscheck" element={<POSCheckOut />} />

              <Route path="/posmain" element={<POSMain />} />
              <Route
                path="/pos/order/startsessions"
                element={<StartSession />}
              />
              <Route
                path="/pos/setting/transaction"
                element={<Transaction />}
              />
              <Route path="/pos/recipt" element={<Recipt />} />
              <Route path="/pos/setting/orders" element={<SettingOrder />} />
              <Route path="/pos/checkout" element={<Checkout />} />
              <Route path="/pos/posorderslipt" element={<POSOrderSlipt />} />
              <Route path="/pos/invoice" element={<Invoice />} />
              <Route path="/pos/refund" element={<Refund />} />
              <Route path="/pos/menu" element={<POS />} />
            </Routes>
          </HashRouter>
        </CartProvider>
      </AuthProvider>
    </SettingProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
