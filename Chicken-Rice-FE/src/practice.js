import { Modal } from "bootstrap"
import { useReducer, useState } from "react"
let reducer = (state,action)=>{
    switch(action.type){
        case "ORDER":return action.payload

        default : return state
    }
}

export default function Practice() {
const [state,dispatch] = useReducer(reducer,{})

    const [file,setFile] = useState()

    function handleSubmit(){
        fetch("http://localhost:8000/uploads/64fedd36804cc5398e9eef30")
        .then(res=>res.blob())
        .then(blob=>{
            let obj = URL.createObjectURL(blob)
            setFile(obj)
        })
    }



    return(
        <div>
            <button onClick={handleSubmit} className="btn btn-primary">submit</button>
        <img src={file} alt="" />
        </div>
    )
};




export function AddNew({show, setShow}) {
const [isOpen,setIsOpen] = useState(false)
{isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
    return (
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
    
          </Modal.Body>
        </Modal>
      );
};








