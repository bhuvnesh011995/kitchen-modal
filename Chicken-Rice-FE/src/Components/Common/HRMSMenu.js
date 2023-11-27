export default [
    {
      name: "HRMS Dashboards",
      to: "/HRMS",
      permissionCode:"190",
      icon: "bx bx-home-circle ",
    },
    {
        name:"Staff",
        to:"#",
        icon:"bx bx-user",
        children: [
            { to: "/HRMS/staff/employee", name: "Employees" ,permissionCode:"190",},
            {to:"/HRMS/staff/roles&privillage",name:"Roles & Privillage",permissionCode:"200",},
        ]
    }
]