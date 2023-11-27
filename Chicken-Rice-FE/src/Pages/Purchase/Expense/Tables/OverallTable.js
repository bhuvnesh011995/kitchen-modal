import MaterialReactTable from "material-react-table";

import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNewOverall from "../AddNewOverall";

export default function OverallTable() {
  const [isOpen,setIsOpen] = useState(false)

    const [data,setData] = useState([{
        date:"2023/5/15",
        decription:"this is description",
        client:"John de",
        project:"Project 1",
        user:"bhuvnesh",
        amount:"$45453",
        status:"Ready"
    }])
  let columns = useMemo(
    () => [
      {
        accessorKey: "date",
        header: "Date",
      },
      {
        accessorKey: "decription",
        header: "Description",
      },
      {
        accessorKey: "user",
        header: "User",
      },
      {
        accessorKey: "client",
        header: "Client",
      },
      {
        accessorKey: "project",
        header: "Project",
      },
      {
        accessorKey: "amount",
        header: "Amount",
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
    ],
    []
  );

  return (
    <>
        
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
        {isOpen && <AddNewOverall show={isOpen} setShow={setIsOpen}/>}
      </div>
      </>
  );
}

