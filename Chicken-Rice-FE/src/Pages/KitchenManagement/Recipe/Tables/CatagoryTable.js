import MaterialReactTable from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNewCatagory from "./AddNewCatagory";
import { deleteCategory, getCategories } from "../../../../utility/recipe/recipe";
import BASEURL from "../../../../Config/Config";

export default function CatagoryTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [error,setError] = useState(false)

  async function getallCategory(){
    let res = await getCategories()
    if(res.status ===200){
      let array = res.data.categories.map(ele=>({
        catagoryName:ele.name,
        catagoryPhoto:ele.photo,
        status:ele.status,
        createdAt:ele.createdAt?.slice(0,10).split("-").reverse().join("/"),
        id:ele._id
      }))
      setData(array)
      setIsLoading(false)
    }else {

      setData([])
      setIsLoading(false)
    }
  }


  useEffect(()=>{
    getallCategory()
  },[])


  async function deletecategory(id){
    let res = await deleteCategory(id)

    if(res.status===204){
      getallCategory()
    }else{
      setError(true)
      setTimeout(()=>{
        setError(false)
      },(3000))
    }
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "catagoryName",
        header: "Catagory Name",
      },
      {

        accessorFn: (row) => `${row.catagoryPhoto}`,
        id: 'photo',
        header: 'Photo',
        size: 80,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              maxWidth:80
            }}
          >
            <img
              alt={"category Pic"}
              height={50}
              src={BASEURL+"/files/"+row.original.catagoryPhoto}
              loading="lazy"
            />
          </Box>
        ),
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
      },
      {
        accessorFn: (row) => row.status,
        id: "status",
        header: "Status",
        Cell: ({ renderedCellValue, row }) => (
          <div
            style={{
              color: renderedCellValue === "Success" ?  "green" :renderedCellValue === "Pending" ? "brown" : "red",
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
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6"></div>
            <div class="col-sm-6 text-end">
              {isOpen && <AddNewCatagory getallCategory={getallCategory} show={isOpen} setShow={setIsOpen} />}
              <button
                onClick={() => setIsOpen(true)}
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
          state={{isLoading:isLoading}}
          enableFullScreenToggle={false}
          enableGlobalFilterModes
          initialState={{
            showGlobalFilter: true,
          }}
          enableDensityToggle={false}
          enableHiding={false}
          enableColumnFilters={false}
          positionGlobalFilter="right"
          muiSearchTextFieldProps={{
            placeholder: `Search ${data.length} rows`,
            sx: { width: "200px" },
            variant: "standard",
          }}
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
          enableRowNumbers
          enableRowActions
          positionActionsColumn="last"
          rowNumberMode="static"
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
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
                  deletecategory(row.original.id)
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        />
      </div>
      {error && <span><i className="bx bx-error-alt me-2 bg-danger text-light"> error occured</i></span>}
    </>
  );
}
