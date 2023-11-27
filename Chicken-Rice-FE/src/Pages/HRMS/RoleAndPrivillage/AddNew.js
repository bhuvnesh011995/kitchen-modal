import { Modal } from "react-bootstrap";
import TreeCheckbox from "./TreeCheckbox";
import { useState } from "react";
import { addRole } from "../../../utility/role/role";

let data = [
    {value:"All",label:"Resourses",children:[
        {
            value:"da",label:"Dashboard",children:[
                {value:"10",label:"Show module",disabled:true}
            ]
        },
        {
            value:"ki",label:"Kitchen Management",children:[
                {value:"in",label:"Incomming Order",children:[
                    {value:"20",label:"Incomming Order View"},
                    {value:"21",label:"Incomming Order Edit"},
                    {value:"22",label:"Incomming Order Delete"},
                    {value:"23",label:"Incomming Order Add"},
                
                ]},
                {value:"or",label:"Order Queue",children:[
                    {value:"30",label:"Order Queue View"},
                    {value:"31",label:"Order Queue Edit"},
                
                ]},
                {value:"rec",label:"Recipe",children:[
                    {value:"40",label:"Recipe View"},
                    {value:"41",label:"Recipe Edit"},
                    {value:"42",label:"Recipe Delete"},
                    {value:"43",label:"Recipe Add"},
                    {value:"44",label:"Category Edit"},
                    {value:"45",label:"Category Delete"},
                    {value:"46",label:"Category Add"},
                
                ]},
            ]
        },
        {
            value:"ord",label:"Order",children:[
                    {value:"qrmanage",label:"Qr Management",children:[
                    {value:"50",label:"Qr Management View"},
                    {value:"51",label:"Qr Management Edit"},
                    {value:"52",label:"Qr Management Delete"},
                    {value:"53",label:"Qr Management Add"},
                
                    ]
                },
                {value:"men",label:"Menu Management",children:[
                    {value:"60",label:"Menu Management View"},
                    {value:"61",label:"Menu Management Edit"},
                    {value:"62",label:"Menu Management Delete"},
                    {value:"63",label:"Menu Management Add"},
                
                    ]
                },
                {value:"orderp",label:"Order Process",children:[
                    {value:"70",label:"Order Process View"},
                    {value:"71",label:"Order Process Edit"},
                    {value:"72",label:"Order Process Delete"},
                
                    ]
                },
                {value:"repo",label:"Report",children:[
                    {value:"80",label:"Report View"},
                    {value:"81",label:"Report Edit"},
                    {value:"82",label:"Report Delete"},
                
                    ]
                },
            ]
        },
        {
            value:"fina",label:"Finance",children:[
                {value:"saleorder",label:"Sales Order",children:[
                    {value:"90",label:"Sales Order View"},
                    {value:"92",label:"Sales Order Delete"},
                    {value:"93",label:"Sales Order Add"},
                
                    ]
                },
                {value:"invoi",label:"Invoicing",children:[
                    {value:"100",label:"Invoicing View"},
                    {value:"101",label:"Invoicing Edit"},
                    {value:"102",label:"Invoicing Delete"},
                    {value:"103",label:"Invoicing Add"},
                
                    ]
                },
                {value:"log",label:"Log Management",children:[
                    {value:"110",label:"Log Management View"},
                    {value:"112",label:"Log Management Delete"},
                
                    ]
                },
                {value:"fix",label:"Fixed Assets",children:[
                    {value:"120",label:"Fixed Assets View"},
                    {value:"121",label:"Fixed Assets Edit"},
                    {value:"122",label:"Fixed Assets Delete"},
                    {value:"123",label:"Fixed Assets Add"},
                
                    ]
                },
                {value:"sto",label:"Store Costing",children:[
                    {value:"130",label:"Store Costing View"},
                    {value:"131",label:"Store Costing Edit"},
                    {value:"132",label:"Store Costing Delete"},
                
                    ]
                },
                
            ]
        },
        {value:"pur",label:"Purchase",children:[
            {value:"requi",label:"Purchase Requisition",children:[
                {value:"140",label:"Purchase Requisition View"},
                {value:"141",label:"Purchase Requisition Edit"},
                {value:"142",label:"Purchase Requisition Delete"},
                {value:"143",label:"Purchase Requisition Add"},
            
                ]
            },
            {value:"purcha",label:"Purchase Order",children:[
                {value:"150",label:"Purchase Order View"},
                {value:"151",label:"Purchase Order Edit"},
                {value:"152",label:"Purchase Order Delete"},
                {value:"153",label:"Purchase Order Add"},
            
                ]
            },
            {value:"purex",label:"Purchase Expense",children:[
                {value:"160",label:"Purchase Expense View"},
                {value:"161",label:"Purchase Expense Edit"},
                {value:"162",label:"Purchase Expense Delete"},
                {value:"163",label:"Purchase Expense Add"},
            
                ]
            },
            {value:"sup",label:"Supplier",children:[
                {value:"170",label:"Supplier View"},
                {value:"171",label:"Supplier Edit"},
                {value:"172",label:"Supplier Delete"},
                {value:"173",label:"Supplier Add"},
            
                ]
            },
        ]},
        {value:"core hr",label:"HRMS",children:[
            {value:"employee",label:"Employee",children:[
                {value:"190",label:"Employee View"},
                {value:"191",label:"Employee Edit"},
                {value:"192",label:"Employee Delete"},
                {value:"193",label:"Employee Add"},
            
                ]
            },
            {value:"rol",label:"Role & Permission",children:[
                {value:"200",label:"Role View"},
                {value:"201",label:"Role Edit"},
                {value:"202",label:"Role Delete"},
                {value:"203",label:"Role Add"},
            
                ]
            },
            
        ]},
    ]}
]

export default function AddNew({getRoles,show,setShow}) {
    const [name,setName] = useState("")
    const [checked,setChecked] = useState(["10"])

    async function handleSubmit(e){
        e.preventDefault();
        try {
            let response = await addRole({name:name,permissions:checked})

            if(response.success){
                setShow(false)
                setName("")
                setChecked([])
                getRoles()
            }
        } catch (error) {
            console.log(error)
        }



    }
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Role</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div className="row">
                                <div className="col-md-6 mb-2">
                                    <label for="">Role Name</label>
                                    <input onChange={e=>setName(e.target.value)} type="text" value={name} className="form-control" placeholder=""/>
                                </div>
                                <div className="col-md-12">
                                    <label for="">Resources</label>
                                    <div className="well" style={{backgroundColor: "transparent !important"}}>
                                        <TreeCheckbox check={checked} setCheck={setChecked} data={data}/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h6>Note:</h6>
                                    <p>1. If you enable the module for an employee, it means employee will only see their related record of assigned module.</p>
                                    <p>2: If you check for a company view, it means employee will be able to see all record of his/her company of assigned module.</p>
                                </div>

                            </div>
          </Modal.Body>
          <div class="modal-footer">
                <button onClick={handleSubmit} type="button" class="btn btn-primary">Save</button>
                <button type="button" class="btn btn-danger" onClick={()=>setShow(false)}>Close</button>
                </div>
        </Modal>
    )
};
