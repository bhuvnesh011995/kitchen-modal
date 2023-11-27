import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import ViewLanguage from "./ViewLanguage";
import { getAllLanguage } from "../../../utility/language/language";
import { deleteLanguageId } from "../../../utility/language/language";
import EditLanguage from "./EditLanguage";
export default function Language() {
  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [open,setOpen] =useState(false)
  const {error,setError} =useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [data,setData] = useState([])



    const handleNameClick = (id) => {
      setSelectedLanguage(id)
      console.log("CATEGORY",id)
      setOpen(true);
    };
  
   
    async function getLanguage(){
      let res = await getAllLanguage()
      if(res.status ===200){
        let array = res.data.language.map(ele=>({
          name:ele.name,
          createdAt:ele.createdAt?.slice(0,10).split("-").reverse().join("/"),
          id:ele._id,
          code:ele.code,
        }))
  
        setData(array)
        setIsLoading(false)
      }else{
        setData([])
        setIsLoading(false)
      }
    }
    useEffect(()=>{
  getLanguage()
    },[])

    const handleEdit=(id)=>{
      setSelectedLanguage(id)
      console.log("language",id)
      setEditOpen(true)
    }

    async function deleteLanguage(id){
      let res = await deleteLanguageId(id)
  
      if(res.status===204){
        getLanguage()
      }else{
        setError(true)
        setTimeout(()=>{
          setError(false)
        },(3000))
      }
    }

    const columns = useMemo(()=>[
      {
        accessorKey: 'serialNumber',
        header: 'S.No',
        Cell: ({ row }) => (
          <div>{row.index + 1}</div>
        ),
        size: 50,
      },
      {
        accessorKey: "name",
        header: "Name",
        Cell: ({ row }) => (
          <div
            style={{ color: row.original === selectedLanguage ? "black" : "blue" }}
            onClick={() => handleNameClick(row.original)}
          >
            {row.original.name}
          </div>
        ),
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
    <option value="0">-- Select --</option>
    <option value="1">English</option>
    <option value="2">Chinese</option>
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
                    {isOpen && <AddNew  show={isOpen} setShow={setIsOpen} getLanguage={getLanguage}  />}
                    {open && <ViewLanguage  show={open} setShow={setOpen} selectedLanguage={selectedLanguage}    />}
                    {editOpen && <EditLanguage show={editOpen} setShow={setEditOpen} getLanguage={getLanguage}  selectedLanguage={selectedLanguage}/>}
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                class="btn btn-primary"
              >
                <i class="fa fa-plus"></i> Add New
              </button>                    </div>
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
                initialState={{
                  showGlobalFilter: true,
                }}
                muiSearchTextFieldProps={{
                  placeholder: `Search ${data.length} rows`,
                  sx: { width: "200px" },
                  variant: "standard",
                }}
                positionActionsColumn="last"
                rowNumberMode="static"
                enableColumnActions={false}
                enableTopToolbar={true}
                muiTableProps={{
                  sx: {
                    border: "1px solid rgba(232, 237, 234, 1)",
                  },
                }}
                muiTableHeadCellProps={{
                  sx: {
                    border: "1px solid rgba(232, 237, 234, 1)",
                  },
                }}
                muiTableBodyCellProps={{
                  sx: {
                    border: "1px solid rgba(232, 237, 234, 1)",
                  },
                }}
                renderRowActions={({ row, table }) => (
                    <Box
                      sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
                    >
                      <IconButton
                        color="secondary"
                        onClick={() => {
                          handleEdit(row.original);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => {
                          deleteLanguage(row.original.id)
                        }}
                      >
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