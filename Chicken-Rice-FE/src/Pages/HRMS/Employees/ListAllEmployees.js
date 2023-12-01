import { Box, IconButton } from "@mui/material"
import { MaterialReactTable } from "material-react-table"
import { useEffect, useMemo, useState } from "react"
import { Button } from "react-bootstrap"
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { getAllEmployee } from "../../../utility/employee/empolyee";
import AddNewEmployee from "./Modals/AddNewEmployee";
import useCustomEffect from "../../../utility/CustomHook/useCustomEffect";


export default function ListAllEmployees() {
  const [isOpen,setIsOpen] = useState(false)
const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(false)
useCustomEffect(getAllUser)

  async function getAllUser(){
    try {
      setIsLoading(true)
      let response = await getAllEmployee()

      if(response.data?.success || response.status ===200){
        let array = response.data.users.map(ele=>({
          name:ele.name || "No Name",
          username:ele.username || "No Username",
          phone:ele.phone || "No Phone",
          role:ele.role?.name
        }))

        setData(array)
        setIsLoading(false)
      }else if(response.status===201){setData([]);setIsLoading(false)}
      else if (response.status===400 || response.status===401 || response.status===402 || response.status===404){
        setData([])
      setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

let columns = useMemo(()=>[
    {
        accessorKey:"name",
        header:"Name",
        size:"100"
    },
    {
        accessorKey:"username",
        header:"Username",
        size:"100"
    },
    {
        accessorKey:"phone",
        header:"Contact No",
        size:"100"
    },
    {
        accessorKey:"role",
        header:"Role",
        size:"100"
    }
],[])
    return(
        <div className="card">
            <div className="card-body">
            {isOpen && <AddNewEmployee show={isOpen} setShow={setIsOpen}/>}
                <h4>All Employees List</h4>
                <div className="d-flex justify-content-end me-5">
                    <Button onClick={()=>{
                    setIsOpen(true)}}>Add New</Button>
                </div>
               
            
                <MaterialReactTable columns={columns}
                data={data}
                enableRowActions
                positionActionsColumn="last"
                state={{isLoading}}
                renderRowActions={({ row, table }) => (
                    <Box
                      sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
                    >
                      <IconButton
                        color="secondary"
                        onClick={() => {
                          table.setEditingRow(row);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => {
                          data.splice(row.index, 1); //assuming simple data table
                          setData([...data]);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}

                />
            </div>
        </div>
    )
};
