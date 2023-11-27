export default [
    {
      name: "Dashboards",
      to: "/pos/dashboard",
      icon: "bx bx-home-circle ",
    },
    {
        name:"Order",
        to:"#",
        icon:"bx bx-cart",
        children: [
            {to: "/pos/order/startsessions", name: "Start Session",},
        
        ]
    },
    {
        name:"Sales Report",
        to:"/pos/salesReport",
        icon:"bx bxs-report",
    },
    // {
    //     name:"Customer List",
    //     to:"/pos/customer",
    //     icon:"bx bx-user",
    // },
    {
        name:"Invoicing",
        to:"/pos/invoicing",
        icon:"bx bxs-file",
    },
    {
        name:"Setting",
        to:"#",
        icon:"bx bxs-brightness",
        children: [
            {to: "/pos/setting/orders", name: "Orders",},
            {to:"/pos/setting/cashInOut",name:"Cash In / Out",},
            // {to:"/pos/setting/floor",name:"Floor Management",},
            
            // {to:"/pos/setting/transaction",name:"Transaction",},
            {to:"/pos/order/startsessions",name:"Edit/Add Table",},
            {to:"#",name:"Close Session",},
        ]
    }
]