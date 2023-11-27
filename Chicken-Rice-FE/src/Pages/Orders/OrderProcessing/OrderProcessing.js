import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

export default function OrderProcessing() {
    const [data,setData] = useState([
        {
            orderId:"kjdsf897",
            customerName:"bhuvnesh kumar",
            mode:"Cash",
            orderDetails:"2 plate Dal Bati",
            status:"Ready"
        }
    ])
    const columns = useMemo(()=>[
        {
        accessorKey: "orderId",
        header: "Order Id",
      },
      {
        accessorKey: "customerName",
        header: "Customer Name",
      },
      {
        accessorKey: "orderDetails",
        header: "Order Details",
      },
      {
        accessorKey: "mode",
        header: "Payment Mode",
      },
      {
        accessorFn: (row) => row.status,
        id: "status",
        header: "Status",
        Cell: ({ renderedCellValue, row }) => (
          <div
            style={{
              color: renderedCellValue === "Ready" ? "green" : "red",
            }}
          >
            {renderedCellValue}
          </div>
        ),
    },
    ],[])
  return (
    <MainPage title={"Order Processing"}>
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
                      {/* <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa fa-plus"></i> Add New</button> --> */}
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
          </div>
        </div>
      </div>
    </MainPage>
  );
}
