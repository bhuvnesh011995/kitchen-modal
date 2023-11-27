import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import ViewPickUpPoint from "./ViewPickUpPoint";
export default function PickupPoint() {
  const [isOpen, setIsOpen] = useState(false);
  const [open,setOpen] =useState(false)
  const [selectedPoint,setSelectedPoint] =useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const {error,setError} =useState(false)
    const [data,setData] = useState([
        {
            name:"test1",
            manager:"test",
            location:'WareHouse',
            pickup:"32456",
            status:'close'
        }
    ])
    const handleNameClick = (id) => {
      setOpen(true);
    };
   
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
            style={{ color: row.original === selectedPoint ? "black" : "blue" }}
            onClick={() => handleNameClick(row.original)}
          >
            {row.original.name}
          </div>
        ),
      },
      {
        accessorKey: "manager",
        header: "Code",
      },
      {
        accessorKey: "location",
        header: "Code",
      },
       {
        accessorKey:'pickup',
        header:" Pickup Station Contact"
       }
   
     
    ],[])
  return (
    <MainPage title={"All Pick-up Points"}>
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
                    {isOpen && <AddNew  show={isOpen} setShow={setIsOpen}  />}
                    {open && <ViewPickUpPoint show={open} setShow={setOpen} />}
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
                          table.setEditingRow(row);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                    
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