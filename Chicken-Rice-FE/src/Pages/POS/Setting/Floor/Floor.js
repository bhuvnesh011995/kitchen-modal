import MaterialReactTable from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import Common from "../../../../Components/Common/Common";
import MainPage from "../../../../Components/Common/MainPage";
import AddNew from "./AddNew";



export default function Floor() {
    const [isOpen,setIsOpen] = useState(false)
    
    const [data,setData] = useState([{
        floorNo:2,
        tableCapacity:16
    }])
    const [isLoading,setIsLoading] = useState(false)



  


  const columns = useMemo(()=>[
    {
      accessorKey: "floorNo",
      header: "Floor No",
    },
    {
      accessorKey: "tableCapacity",
      header: "Table Capacity",
    }
  ],[]);
  return (
    <>
    <Common sidebar={"POS"}>
        <MainPage title={"Floor Management"}>
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
