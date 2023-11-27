import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { getAllRole } from "../../../../utility/role/role";
import { signup } from "../../../../utility/auth/auth";


export default function AddNewEmployee({ show, setShow,getAllUser }) {
  const [isvalid,setIsvalid] = useState()
  const [data,setData] = useState({
    name:"",
    username:"",
    email:"",
    password:"",
    phone:"",
    role:""
  })
  const [options,setOptions] = useState([])

  async function getRoles(){
    try {
      let response = await getAllRole()

      if(response.data.success && response.status===200){
      let array =  response.data.roles.map(ele=>({
        value:ele._id,
        title:ele.name
      }))
      setOptions(array)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
    getRoles()
  },[])

  async function handleSubmit(e){
    e.preventDefault();
    if(isvalid){
      let response = await signup(data)
      if(response.status===201){
        setShow(false)
        getAllUser()

      }
      console.log(response)
    }
  }
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Empolyee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div class="modal-body">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Name</label>
                    <input
                    onChange={(e)=>setData(preVal=>({...preVal,name:e.target.value}))}
                    value={data.name}
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Username</label>
                    <input
                    onChange={(e)=>setData(preVal=>({...preVal,username:e.target.value}))}
                    value={data.username}
                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Email</label>
                    <input
                    onChange={(e)=>setData(preVal=>({...preVal,email:e.target.value}))}
                    value={data.email}
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Contact Number</label>
                    <input
                    onChange={(e)=>setData(preVal=>({...preVal,phone:e.target.value}))}
                    value={data.phone}
                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Password</label>
                    <input
                    onChange={(e)=>setData(preVal=>({...preVal,password:e.target.value}))}
                    value={data.password}
                      type="password"
                      className={isvalid===true ? `form-control is-valid`:isvalid===false ? "form-control is-invalid" :"form-control"}
                      placeholder="password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Confirm Password</label>
                    <input
                    onBlur={(e)=>{
                      if(e.target.value !=data.password){
                        setIsvalid(false)
                      }else setIsvalid(true)
                    }}
                      type="password"
                      className={isvalid===true ? `form-control is-valid`: isvalid===false ? "form-control is-invalid" :"form-control"}
                      placeholder="confirm passowrd"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Roles
                    </label>{" "}
                    <br />
                    <select
                      className="form-control select2-templating"
                      style={{ width: "100%" }}
                      onChange={(e)=>setData(preVal=>({...preVal,role:e.target.value}))}
                      defaultValue={data.role}
                    >
                      <option value="">Select</option>
                      {options.map((ele,i)=>(
                        <option key={i} value={ele.value}>{ele.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                
               
              </div>
            </div>
            
          </div>
        </div>

        {/* <!-- Modal footer --> */}
        <div className="modal-footer">
          <button onClick={handleSubmit} type="button" className="btn btn-success">
            SAVE
          </button>
          <button type="button" class="btn btn-danger" onClick={()=>setShow(false)}>Close</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
