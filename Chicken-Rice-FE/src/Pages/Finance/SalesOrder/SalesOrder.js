import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon,Visibility } from "@mui/icons-material";
import AddNew from "./AddNew";

export default function SalesOrder() {
    const [isOpen,setIsOpen] = useState(false)
    const [data,setData] = useState([
        {
            orderNo:"kjdsf897",
            customerName:"bhuvnesh kumar",
            OrderDate:"2023/12/12",
            netTotal:"$45645634553",
            lastUpdated:"2023/12/15",

        }
    ])
    const columns = useMemo(()=>[
        {
        accessorKey: "orderNo",
        header: "Order Number",
      },
      {
        accessorKey: "OrderDate",
        header: "Order Date",
      },
      {
        accessorKey: "customerName",
        header: "Customer Name",
      },
      {
        accessorKey: "netTotal",
        header: "Net Total",
      },
      {
        accessorKey: "lastUpdated",
        header: "Last Updated",
      },
    ],[])
  return (
    <MainPage title={"Sales Order"}>
        {isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
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
                      <button onClick={()=>setIsOpen(true)} type="button" class="btn btn-primary"><i class="fa fa-plus"></i> Create</button>
                    </div>
                  </div>
                </div>
                <MaterialReactTable 
                data={data}
                columns={columns}
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
                      >
                        <Visibility />
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
          </div>
        </div>
      </div>
    </MainPage>
  );
}
