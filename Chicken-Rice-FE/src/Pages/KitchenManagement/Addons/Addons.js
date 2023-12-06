import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useEffect } from "react";
import BASEURL from "../../../Config/Config";
import ViewAddons from "./ViewAddons";
import AddNewAddons from "./AddNewAddons";
import EditAddons from "./EditeAddons";
import { deleteAddonsId } from "../../../utility/Addons/addons";
import { getaddons } from "../../../utility/Addons/addons";
import axios from "axios";
export default function Addons() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openEdit,setOpenEdit] =useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState(null);
  const [selectedData,setSelectedData] =useState(null);
  const [error, setError] = useState(false);


  const handleNameClick = (addons) => {
    console.log(addons)
    setSelectedAddons(addons);
    setOpen(true);
  };

  const handleEdit=(id)=>{
    setSelectedData(id)
    console.log("SIZE",id)
    setOpenEdit(true)
  }

    const [data,setData] = useState([])

    async function getAllAddons(){
      let res = await getaddons()
      if(res.status ===200){
        let array = res.data.addons.map(ele=>({
          addonsName:ele.addonsName,
          createdAt:ele.createdAt?.slice(0,10).split("-").reverse().join("/"),
          id:ele._id,
          status:ele.status
        }))
  
        setData(array)
        setIsLoading(false)
      }else{
        setData([])
        setIsLoading(false)
      }
    }
    async function  handleCheckboxChange(id,status) {
      try{
       let response = await axios.put(BASEURL+"/addons/"+id,{status})
       if(response.status === 201) return getAllAddons()
       console.log("response",response)
      }
      catch(error){
    console.log(error)
      }
  
   }
  

   
  async function deleteAddons(id){
    let res = await deleteAddonsId(id)
    if(res.status===204){
      getAllAddons()
    }else{
      setError(true)
      setTimeout(()=>{
        setError(false)
      },(3000))
    }
  }
  
  useEffect(()=>{
    getAllAddons()
  },[])
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
        accessorKey: "addonsName",
        header: "Addons Name",
        Cell: ({ row }) => (
          <div
            style={{ color: row.original === selectedAddons ? "black" : "blue" }}
            onClick={() => handleNameClick(row.original)}
          >
            {row.original.addonsName}
          </div>
        ),
      },
      {
        accessorFn: (row) => row.status,
        id: "status",
        header: "Status",
        Cell: ({ renderedCellValue, row }) => (
          <div>
          <input
            type="checkbox"
            id={`switch${row.original.id}`} 
            data-switch="none"
            checked={row.original.status}
            onClick={(e) => handleCheckboxChange(row.original.id,e.target.checked)}
          />
          <label htmlFor={`switch${row.original.id}`} data-on-label="" data-off-label=""></label>
        </div>
        ),
      },
    ],[])
  return (
    <MainPage title={"Addons"}>
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
                    <div class="col-sm-6 text-end">
                    {isOpen && <AddNewAddons  show={isOpen} setShow={setIsOpen}  getAllAddons={getAllAddons} />}
                    {open && <ViewAddons  show={open} setShow={setOpen}  selectedAddons={selectedAddons}/>}
                    {openEdit && <EditAddons  show={openEdit} setShow={setOpenEdit}  selectedData={selectedData}    getAllAddons={getAllAddons} />}

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
                          deleteAddons(row.original.id)
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
