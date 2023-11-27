import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";

export default function Supplier() {
  const [isOpen,setIsOpen] = useState(false)

    const [data,setData] = useState([{
        supplierContact:"0123456789",
        supplierAddress:"123 apartment jaipur, Rajasthan",
        supplierName:"John de",
        supplierType:"Type 1",
        businessReport:"report",
        riskData:"Risk data",
        supplierPerformace:"5",
        paymentHistory:"history"
    }])
  let columns = useMemo(
    () => [
      {
        accessorKey: "supplierName",
        header: "Supplier Name",
      },
      {
        accessorKey: "supplierContact",
        header: "Supplier Contact",
      },
      {
        accessorKey: "supplierAddress",
        header: "Supplier Address",
      },
      {
        accessorKey: "supplierType",
        header: "Supplier Type",
      },
      {
        accessorKey: "businessReport",
        header: "Business Report & Documents",
      },
      {
        accessorKey: "riskData",
        header: "Financial & Credit Risk Data",
      },
      {
        accessorKey: "supplierPerformace",
        header: "Supplier Performance Ratings",
      },
      {
        accessorKey: "paymentHistory",
        header: "Payment History & Records",
      },
    ],
    []
  );

  return (
    <MainPage title={"Supplier Management"}>
        
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

