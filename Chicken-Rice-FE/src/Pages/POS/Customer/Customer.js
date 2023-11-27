import MaterialReactTable from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import Common from "../../../Components/Common/Common";
import MainPage from "../../../Components/Common/MainPage";



export default function Customer() {
    const [isOpen,setIsOpen] = useState(false)
    
    const [data,setData] = useState([{
        orderNo:"kjdfja7897",
        customerName:"Bhuvnesh Kumar",
        phone:"+91 8094681101",
        date:"10/02/2023"
    }])
    const [isLoading,setIsLoading] = useState(false)



  


  const columns = useMemo(()=>[
    {
      accessorKey: "orderNo",
      header: "Order No",
    },
    {
      accessorKey: "customerName",
      header: "Bhuvnesh Kumar",
    },
    {
      accessorKey: "phone",
      header: "Contact No",
    },
    {
      accessorKey: "date",
      header: 'Date',
    }
  ],[]);
  return (
    <>
    <Common sidebar={"POS"}>
        <MainPage title={"Customer List"}>
            <div className="card card-body">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6"></div>
            <div class="col-sm-6 text-end">
            {isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
              <button
              onClick={()=>setIsOpen(true)}
                type="button"
                class="btn btn-primary"
              >
                <i class="fa fa-plus"></i> Add New
              </button>
            </div>
          </div>
        </div>
        {/* table */}
        <MaterialReactTable
        data={data}
        columns={columns}
        state={{isLoading}}
        enableFullScreenToggle={false}
        enableGlobalFilterModes
      initialState={{
        showGlobalFilter: true,
      }}
      enableDensityToggle={false}
      enableHiding={false}
      enableColumnFilters={false}
      positionGlobalFilter="right"
        enableColumnActions={false}
      muiTableHeadCellProps={{
        sx: {
          border: '0.75px solid rgba(232, 237, 234, 1)',
        },
      }}
        enableRowNumbers
        enableRowActions
        positionActionsColumn="last"
        rowNumberMode="static"
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
      </MainPage>
      </Common>
    </>
  );
}
