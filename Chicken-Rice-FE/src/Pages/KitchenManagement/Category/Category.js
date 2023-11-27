import MaterialReactTable from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNewCatagory from "./AddNewCatagory";
import { getCategories ,deleteCategory } from "../../../utility/categories/category";
import BASEURL from "../../../Config/Config";
import MainPage from "../../../Components/Common/MainPage";
import axios from "axios";
import ViewCategory from "./ViewCategory";
import EditCategory from "./EditCategory";
export default function Category() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit,setEdit] = useState(false)
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [error,setError] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editCategory,setEditCategory] =useState(null) 

  const handleNameClick = (category) => {
    setSelectedCategory(category);
    console.log("CATEGORY",category)
    setOpen(true);
  };

  const handleEdit =(Id)=>{
     setEditCategory(Id);
     setEdit(true)
  }

  async function  handleCheckboxChange(id,status) {
     try{
      console.log(BASEURL+"/category/"+id)
      let response = await axios.put(BASEURL+"/category/"+id,{status})
      if(response.status === 201) return getallCategory()
      console.log(response)
     }
     catch(error){
   console.log(error)
     }

  }

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
        accessorKey: 'serialNumber',
        header: 'S.No',
        Cell: ({ row }) => (
          <div>{row.index + 1}</div>
        ),
        size: 50,
      },
      {
        accessorKey: "catagoryName",
        header: "Catagory Name",
        Cell: ({ row }) => (
          <div
            style={{ color: row.original === selectedCategory ? "black" : "blue" }}
            onClick={() => handleNameClick(row.original)}
          >
            {row.original.catagoryName}
          </div>
        ),
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
          <div>
          <input
            type="checkbox"
            id={`switch${row.original.id}`} 
            data-switch="none"
            checked={row.original.status}
            onClick={(e) => handleCheckboxChange(row.original.id,e.target.checked)}
          />
          <label htmlFor={`switch${row.original.id}`} data-on-label="" data-off-label=""></label>
        </div>
        ),
      },
    ],
    []
  );
  return (
  <MainPage title={"Category"}>         
    <>
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6"></div>
            <div class="col-sm-6 text-end">
              {isOpen && <AddNewCatagory getallCategory={getallCategory} show={isOpen} setShow={setIsOpen} />}
              {open && <ViewCategory  show={open} setShow={setOpen} selectedCategory={selectedCategory} />}
             { edit && <EditCategory show={edit} setShow={setEdit}  editCategory={editCategory} getallCategory={getallCategory}/>}
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
          enableRowActions
          positionActionsColumn="last"
          rowNumberMode="static"
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
              <IconButton
                color="secondary"
                // onClick={() => {
                //   table.setEditingRow(row);
                // }}
                onClick={() => handleEdit(row.original)}
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
    </MainPage>
  );
}
