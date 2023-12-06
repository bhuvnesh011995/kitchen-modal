import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import ViewLanguage from "./ViewLanguage";
import { addLanguage, deleteLanguageById, getAllLanguage, updateLanguage } from "../../../utility/language/language";

import EditLanguage from "./EditLanguage";
import useCustomEffect from "../../../utility/CustomHook/useCustomEffect";
import { toast } from "react-toastify";



export default function Language() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isViewLanguageOpen,setIsViewLanguageOpen] =useState(false)
  const [updateData,setUpdateData] = useState(null);
  const [view,setView] = useState(null)
  const [data,setData] = useState([])
  useCustomEffect(getLanguage)

    async function addNewLanguage(data){
      try {
        let res = await addLanguage(data)
        if(res.status === 200){
          setData(preVal =>([...preVal,res.data]))
          setIsOpen(false)
          toast.success("languge added successfully")
        }else{
          toast.error("error occured while adding language")
          console.log(res)
        }
      } catch (error) {
        
      }
    }

    async function updateLanguageById(id,updatedLanguageData){
      try {
        if(updatedLanguageData.name ===updateData.name && updatedLanguageData.code ===updateData.code) return toast.info("nothing to update")
        let res = await updateLanguage(id,updatedLanguageData)
 
        if(res.status==200){
          let array = data.map(ele=>{
            if(ele._id===id) return res.data
            else return ele
          })
          setIsOpen(false)
          toast.success("language updated")
          setData(array)
        }
      } catch (error) {
        console.log(error)
      }
    }

    async function getLanguage(){
      let res = await getAllLanguage()
      if(res.status ===200){

        setData(res.data)
        setIsLoading(false)
      }else{
        setData([])
        setIsLoading(false)
      }
    }
    

    const columns = useMemo(()=>[
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "code",
        header: "Code",
      },
    ],[])
 
  return (
    <MainPage title={"language"}>
      <div class="row">
      <div class="row">
      <div className="form-group col-md-10" >
  <label>Default Language</label>
  <select name="" id="" className="form-select">
    <option value="">-- Select --</option>
    {data.map(ele=>(
      <option key={ele._id} value={ele._id}>{`${ele.name}/ ${ele.code}`}</option>
    ))}
    
  </select>
</div>

<div className="text-right col-md-2">
  <label style={{ visibility: 'hidden' }}>Default Language</label>
  <button type="submit" className="btn btn-primary">Save</button>
</div>
</div>

        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="table-wrapper">
                <div class="table-title">
                  <div class="row">
                    <div class="col-sm-6">
                      <h2></h2>
                    </div>
                    <div class="col-sm-6 text-end">
                    {isOpen && <AddNew  show={isOpen} setShow={setIsOpen} update={updateLanguageById} data={updateData} setData={setUpdateData} addNew = {addNewLanguage} />}
                    {view && <ViewLanguage  show={view} setShow={setView}/>}
                    {/* {editOpen && <EditLanguage show={editOpen} setShow={setEditOpen} getLanguage={getLanguage}  selectedLanguage={selectedLanguage}/>} */}
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                class="btn btn-primary"
              >
                <i class="fa fa-plus"></i> Add New</button>
                </div>
                  </div>
                    </div>
                <MaterialReactTable
                data={data}
                columns={columns}
                enableRowActions
                enableFullScreenToggle={false}
                enableDensityToggle={false}
                enableHiding={false}
                enableColumnFilters={false}
                positionGlobalFilter="right"
                enableRowNumbers
                initialState={{
                  showGlobalFilter: true,
                }}
                muiSearchTextFieldProps={{
                  placeholder: `Search...`,
                  sx: { width: "200px" },
                  variant: "standard",
                }}
                positionActionsColumn="last"
                rowNumberMode="static"
                enableColumnActions={false}
                enableTopToolbar={true}
                muiTableBodyRowProps={({row})=>({
                  onClick: (e)=>{
                    if(e.target.tagName==="TD"){
                      setView(row.original._id)
                    }
                  },
                  sx:{cursor:"pointer"}
                })}
                muiTableProps={{
                  sx: {
                    border: "1px solid rgba(232, 237, 234, 1)",
                  },}}
                muiTableHeadCellProps={{
                  sx: {
                    border: "1px solid rgba(232, 237, 234, 1)",
                  },}}
                muiTableBodyCellProps={{
                  sx: {
                    border: "1px solid rgba(232, 237, 234, 1)",
                  },}}
                renderRowActions={({ row, table }) => (
                    <Box
                      sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
                      <IconButton
                        color="secondary"
                        onClick={() => {
                          setUpdateData(row.original)
                          setIsOpen(true)
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={async () => {
                          let res = await deleteLanguageById(row.original._id)
                          if(res.status===204){
                            toast.success("language deleted")
                            let array = data.filter(ele=>ele._id!=row.original._id)
                            setData(array)
                          }else{
                            console.log(res)
                            toast.error("error occured while deleteing language")
                          }
                        }}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainPage>
  );
}