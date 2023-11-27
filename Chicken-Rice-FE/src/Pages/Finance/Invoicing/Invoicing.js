import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon ,Visibility,Download} from "@mui/icons-material";
import AddNew from "./AddNew";

export default function Invoicing() {
  const [isOpen,setIsOpen] = useState(false)

    const [data,setData] = useState([{
        invoiceNo:"fd4527",
        invoiceDate:"2023/08/15",
        grandTotal:"$541",
        status:"Success"
    }])
  let columns = useMemo(
    () => [
      {
        accessorKey: "invoiceNo",
        header: "Invoice Number",
      },
      {
        accessorKey: "invoiceDate",
        header: "Incoice Date",
      },
      {
        accessorKey: "grandTotal",
        header: "Grand Total",
      },
      {
        accessorFn: (row) => row.status,
        id: "status",
        header: "Status",
        Cell: ({ renderedCellValue, row }) => (
          <div
            style={{
              color: renderedCellValue === "Success" ? "green" : "red",
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
    <MainPage title={"Incoming Orders"}>
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
                        color="primary"
                      >
                        <Visibility />
                      </IconButton>
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
                      <IconButton
                        color="primary"
                      >
                        <Download />
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

