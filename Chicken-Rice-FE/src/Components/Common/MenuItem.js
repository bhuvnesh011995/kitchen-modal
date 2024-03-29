export default [
  {
    name: "Dashboards",
    to: "/",
    permissionCode:"10",
    icon: "bx bx-home-circle ",
  },
  {
    name: "POS",
    to: "/pos/dashboard",
    permissionCode:"190",
    icon: "bx bx-table",
  },
 
  {
    name: "Kitchen Management",
    to: "#",
    icon: "bx bx-store",
    children: [
      { to: "/management/category", name: "category" ,permissionCode:"15",},
      { to: "/management/recipe", name: "Recipe" ,permissionCode:"35",},
      { to: "/management/addons", name: "Addons" ,permissionCode:"20",},

    ],
  },
  {
    name: "Table & QR Builder",
    to: "/qrbuilder",
    permissionCode:"10",
    icon: "bx bx-briefcase",
  },

  {
    name: "Order",
    to: "#",
    icon: "bx bx-envelope",
    children: [
      { to: "/order/allOrder", name: "All Orders" ,permissionCode:"50",},
      { to: "/order/posOrder", name: "Pos Orders" ,permissionCode:"55",},
      { to: "/order/mobileOrder", name: "Mobile Orders" ,permissionCode:"65",},


  
    ],
  },
  
  {
    name: "Finance",
    to: "#",
    icon: "bx bx-briefcase",
    children: [
      { to: "/finance/invoicing", name: "Invoicing" ,permissionCode:"100",},
      { to: "/finance/logManagement", name: "Log Management" ,permissionCode:"110",},
      { to: "/finance/ficedAssets", name: "Fixed Assets" ,permissionCode:"120",},
      { to: "/finance/storeCosting", name: "Store Costing" ,permissionCode:"130",},
    ],
  },
  {
    name: "Purchase",
    to: "#",
    icon: "bx bx-clipboard",
    children: [
      { to: "/purchase/requisition", name: "Purchase Requisition" ,permissionCode:"140",},
      { to: "/purchase/order", name: "Purchase Order" ,permissionCode:"150",},
      { to: "/purchase/expense", name: "Purchase Expense" ,permissionCode:"160",},
      { to: "/purchase/supplier", name: "Supplier" ,permissionCode:"170",},
    ],
  },
  {
    name: "queue display",
    to: "/queuedisplay",
    permissionCode:"180",
    icon: "bx bxs-calendar-event",
  },
  {
    name: "Kitchen Screen",
    to: "/order-details",
    permissionCode:"200",
    icon: "bx bx-food-menu",
  },
  
  {
    name: "HRMS",
    to: "/HRMS",
    permissionCode:"190",
    icon: "bx bxs-calendar-event",
  },


  {
    name: "Setup & Configration",
    to: "#",
    icon: "bx bx-buoy",
    children: [
      { to: "/configration/generalsetting", name: "General Setting" ,permissionCode:"95",},
      { to: "/configration/language", name: "Language" ,permissionCode:"50",},
      { to: "/configration/currency", name: "Currency" ,permissionCode:"45",},
      { to: "/configration/taxes", name: "Vat & Tax" ,permissionCode:"45",},                     

    ],
  },
  
];
