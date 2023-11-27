import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";

export default function Requisition() {
  const [isOpen,setIsOpen] = useState(false)

    const [data,setData] = useState([{
        referance:"kljdsaf678adsfjhas",
        quotationId:"7868yghj",
        orderDate:"2023/05/18",
        requesterName:"Bhuvnesh Kumar",
        subTotal:"$6549",
        totalAmount:"$8974357",
        status:"success"
    }])
  let columns = useMemo(
    () => [
      {
        accessorKey: "referance",
        header: "Referance",
      },
      {
        accessorKey: "quotationId",
        header: "Quotation Id",
      },
      {
        accessorKey: "orderDate",
        header: "Order Date",
      },
      {
        accessorKey: "requesterName",
        header: "Requester Name",
      },
      {
        accessorKey: "subTotal",
        header: "Sub Total",
      },
      {
        accessorKey: "totalAmount",
        header: "Total Amount",
      },
      {
          accessorFn: (row) => row.status,
          id: "status",
          header: "Status",
          Cell: ({ renderedCellValue, row }) => (
            <div
              style={{
                color: renderedCellValue === "success" ? "green" : "red",
              }}
            >
              {renderedCellValue}
            </div>
          ),
      },
    ],
    []
  );

  return (
    <MainPage title={"Purchase Requisition"}>
        
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
                      <button onClick={()=>setIsOpen(true)} type="button" class="btn btn-primary">
                        <i  class="fa fa-plus"></i> Add New
                      </button>
                    </div>
                  </div>
                </div>
                {/* table */}
                <MaterialReactTable
                  data={data}
                  columns={columns}
                  enableRowActions
                  positionActionsColumn="last"
                  enableRowNumbers
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
        {isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
      </div>
    </MainPage>
  );
}

