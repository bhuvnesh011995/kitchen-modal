import MaterialReactTable from "material-react-table";

import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNewProject from "../AddNewProject";

export default function ProjectTable() {
  const [isOpen,setIsOpen] = useState(false)

    const [data,setData] = useState([{
        title:"project 1",
        id:"7868yghj",
        client:"John de",
        progress:"99%",
        team:"team 1",
        dueDate:"2023/5/15",
        status:"Ready"
    }])
  let columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "client",
        header: "Clint",
      },
      {
        accessorKey: "dueDate",
        header: "Due Date",
      },
      {
        accessorKey: "progress",
        header: "Progress",
      },
      {
        accessorKey: "team",
        header: "Team",
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
        {isOpen && <AddNewProject show={isOpen} setShow={setIsOpen}/>}
      </div>
      </>
  );
}

