import MaterialReactTable from "material-react-table";

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import { addRole, deleteRole, getAllRole, updateRole } from "../../../utility/role/role";
import { authContext } from "../../../Context/AuthContext";
import useCustomEffect from "../../../utility/CustomHook/useCustomEffect";
import { toast } from "react-toastify";


export default function RoleTable() {
  const [isOpen,setIsOpen] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const {permissions} = useContext(authContext)
  const [updateData,setUpdateData] = useState(null)
  const [data,setData] = useState([])
useCustomEffect(getRoles)

  async function getRoles(){
    try {
      setIsLoading(true)
      
      let response =  await getAllRole()
    if(response.status===200){
      console.log(response.data,"roleData")
        setData(response.data.roles)
        setIsLoading(false)
      
    }else if(response.status===201){
      setData([])
      setIsLoading(false)
    }else if(response.status === 400 || response.status === 401 || response.status === 402 || response.status === 404){
      setIsLoading(false)
      toast.error("error occured while loading")
    }

    } catch (error) {
      console.log(error)
    }
    

  }

  async function addrole(data){
    try {
      let res = await addRole(data)
      if(res.status===200){
        setData(preVal=>([...preVal,res.data]))
        setIsOpen(false)
        toast.success("role added")
      }
    } catch (error) {
      console.log(error)
      toast.error('error while added role')
    }
  }

const updateRoleByid = useCallback(async (id,updateData)=>{
try {
  const res = await updateRole(id,updateData)
console.log(res)
  if(res.status===200){
    let array = data?.map(ele=>ele._id===id?(res.data):ele)
    setIsOpen(false)
    toast.success("role updated")
    setData(array)
  }
} catch (error) {
  console.log(error)
}
},[data])

  async function deleterole(id){
    let res = await deleteRole(id)
    if(res.status===204){
      toast.success('role deleted')
      let array = data.filter(ele=>ele._id!=id)
      setData(array)
    }else{
      toast.error('error while deleting')
    }
  }

    
  let columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Role Name",
      },
      {
        accessorFn: row=>row.createdAt ? row.createdAt?.slice(0,10).split("-").reverse().join("/"):"NA",
        id:"createdAt",
        header: "Created At",
      },
    ],
    []
  );

  return (
    
        
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="table-wrapper">
                <div class="table-title">
                  <div class="row">
                    <div class="col-sm-6">
                      <h2></h2>
                    </div>
                    {(permissions.includes("All") || permissions.includes("203") ) && <div class="col-sm-6 text-end">
                      <button onClick={()=>setIsOpen(true)} type="button" class="btn btn-primary">
                        <i  class="fa fa-plus"></i> Add New
                      </button>
                    </div>}
                  </div>
                </div>
                {/* table */}
                <MaterialReactTable
                  data={data}
                  columns={columns}
                  state={{isLoading:isLoading}}
                  enableRowActions
                  positionActionsColumn="last"
                  enableRowNumbers
                  rowNumberMode="static"
                  renderRowActions={({ row, table }) => (
                    <Box
                      sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
                    >
                      {(permissions.includes("All") || permissions.includes("201") )&& <IconButton
                        color="secondary"
                        onClick={() => {
                          setUpdateData(row.original)
                          setIsOpen(true)
                        }}
                      >
                        <EditIcon />
                      </IconButton>}
                      {(permissions.includes("All") || permissions.includes("202") )&& <IconButton
                        color="error"
                        onClick={() => {
                          deleterole(row.original._id)
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>}
                    </Box>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        {isOpen && <AddNew addRole={addrole} updateRole={updateRoleByid} updateData={updateData} setUpdateData={setUpdateData} show={isOpen} setShow={setIsOpen}/>}
      </div>
  );
}

