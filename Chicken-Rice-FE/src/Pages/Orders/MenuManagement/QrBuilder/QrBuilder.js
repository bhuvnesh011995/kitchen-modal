import MaterialReactTable from "material-react-table";
import MainPage from "../../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNewQrBuilder from "./AddNewQrBuilder";
import { getTable } from "../../../../utility/recipe/recipe";
import { Link } from "react-router-dom";
import QrCodeGenerator from "./QrCodeGenerate";
import { deleteTable } from "../../../../utility/qrbuilder/qrbuilder";
import { useEffect } from "react";
import EditQrBuilder from "./EditQrBuilder";
import { useNavigate } from 'react-router-dom';

export default function QrBuilder() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedQrBuilder, setSelectedQrBuilder] = useState(null);
  const navigate = useNavigate();

  const [error ,setError] = useState(false)

  const handleEdit = (id) => {
    setSelectedQrBuilder(id);
    console.log("product",id)
    setOpen(true);
  };
  async function getAllTable(){
    let res = await getTable()
    if(res.status ===200){
      let array = res.data.table.map(ele=>({
        tableNumber:ele.tableNumber,
        seatNumber:ele.seatNumber,
        status:ele.status,
        createdAt:ele.createdAt?.slice(0,10).split("-").reverse().join("/"),
        id:ele._id
      }))
      setData(array)
    }else {

      setData([])
    }
  }


  useEffect(()=>{
    getAllTable()
  },[])

  const handleQrCode=(row)=>{
    navigate('/qrcodegenerator', { state: { rowData: row } });

  }
  
  async function deleteTableId(id){
    let res = await deleteTable(id)
    if(res.status === 204)
    {
      getAllTable()
    }
    else{
      setError(true)
      setTimeout(()=>{
        setError(false)
      },(3000))
    }
  }

    const [data,setData] = useState([])
    const columns = useMemo(()=>[
      {
        accessorKey: 'serialNumber',
        header: "SL.No",
        Cell: ({ row }) => {
          return <div>{row.index + 1}</div>;
        },
        size: 50
      },
      
        {
        accessorKey: "tableNumber",
        header: "Table No",
      },
   
      {
        accessorKey: "seatNumber",
        header: "Seat Number",
        
    },
    {
      accessorKey: "status",
      header: "Status",
      
  },
    {
        header: "Qr Code",
        Cell: ({ row }) => (
       
          <button className="btn bg-primary text-white border-0"   onClick={() => handleQrCode(row.original)}>Generate</button>
        
            ),
      },
    ],[])
  return (
    <MainPage title={"Table"}>
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
                    {isOpen && <AddNewQrBuilder  show={isOpen} setShow={setIsOpen} getAllTable={getAllTable} />}
                    {open && <EditQrBuilder  show={open} setShow={setOpen} getAllTable={getAllTable} selectedQrBuilder={selectedQrBuilder}  />}

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
                        deleteTableId(row.original.id)
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
