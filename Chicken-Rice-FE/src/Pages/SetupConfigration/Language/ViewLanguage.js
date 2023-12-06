import React, { useCallback, useEffect, useMemo } from "react";
import { useState  } from "react";
import { Modal } from "react-bootstrap";
import { getLanguageById, updateLanguageFields } from "../../../utility/language/language";
import MaterialReactTable from "material-react-table";
import { toast } from "react-toastify";
export default function ViewLanguage({show,setShow}) {
  const [language,setLanguage] = useState()
  const [data,setData] = useState([])
  const [ready,setReady] = useState(false)

  useEffect(()=>{
    if(ready) getLanguageData(show)
    setReady(true)
  },[ready])
const getLanguageData = useCallback(async (id)=>{
    try {
        let response = await getLanguageById(id)
        if(response.status===200){
            let keys = Object.keys(response.data)
            let array = keys.map(ele =>({field:ele,
            value:response.data[ele]}))
            setData(array)
        }
    } catch (error) {
    }
},[])


const handleSubmit = useCallback(async (id,updatedLanguage)=>{
    if(!updatedLanguage) return toast.info("Nothing to Save")
    else{
        try {
            let response = await updateLanguageFields(id,updatedLanguage)
            if(response.status===204){
                toast.success("Language Updated successfully")
                setShow(null)
            }
        } catch (error) {
            console.log(error)
            toast.error('error occured while fetching data')
        }
    }
},[])


const handleSaveCell = (row,cell, value) => {
    
    data[cell.row.index][cell.column.id] = value;
   
   
    setLanguage(preVal=>({...preVal,[row.original.field]:value}))
    setData([...data]);
  };
        const columns = useMemo(()=>[
            {
                accessorKey:"field",
                header:"Field",
                enableEditing:false
            },
            {
                accessorKey:"value",
                header:"Value"
            }
        ],[])
    return(
        <Modal size="lg" show={show?true:false} onHide={() => setShow(null)}>
          <Modal.Header closeButton>
            <Modal.Title>Language</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
                <MaterialReactTable data={data||[]} columns={columns}
                enableRowNumbers
                rowNumberMode="static"
                editingMode="cell"
                enableEditing
                muiTableBodyCellEditTextFieldProps={({ row,cell }) => ({
                //onBlur is more efficient, but could use onChange instead
                onBlur: (event) => {
                handleSaveCell(row,cell, event.target.value);
                },
                })}
                 />
          
                    <div className="modal-footer d-flex justify-content-end">
                    <button onClick={()=>setShow(null)} type="button" className="btn btn-danger">
                        Close
                    </button>
                    <button type="submit" onClick={()=>handleSubmit(show,language)} className="btn btn-primary" >Save</button>
                 
                </div>
          </Modal.Body>
        
        </Modal>
    )
};
