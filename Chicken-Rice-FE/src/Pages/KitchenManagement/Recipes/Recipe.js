import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNewRecipe from "./AddNewRecipe";
import BASEURL from "../../../Config/Config";
import { useEffect } from "react";
import { getProduct,deleteProduct } from "../../../utility/product/product";
import axios from "axios";
import ViewRecipe from "./ViewRecipe";
import EditRecipe from "./EditRecipe";
export default function Recipe() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNameClick = (product) => {
    setSelectedProduct(product);
    console.log("product",product)
    setOpen(true);
  };
  const handleEdit = (id) => {
    setSelectedProduct(id);
    console.log("product",id)
    setOpenEdit(true);
  };

  async function  handleCheckboxChange(id,status) {
    try{
     console.log(BASEURL+"/product/"+id)
     let response = await axios.put(BASEURL+"/product/"+id,{status})
     if(response.status === 201) return getAllProduct()
     console.log(response)
    }
    catch(error){
  console.log(error)
    }

 }
  
  async function getAllProduct(){
    let res = await getProduct()
    console.log('RES',res)
    if(res.status ===200){
      let array = res.data.product.map(ele=>({
        recipeName:ele.recipeName,
        createdAt:ele.createdAt?.slice(0,10).split("-").reverse().join("/"),
        category: ele.category?._id,
        categoryName: ele.category?.name,
        productFile:ele.file,
        status:ele.status,
        defaultPrice:ele.defaultPrice,
        description:ele.description,
        ingredients:ele.ingredients,
        addonsName: ele.addonsName?.map(addon => addon._id), 
          id:ele._id,
   
      }))

      setData(array)
      setIsLoading(false)
    }else{
      setData([])
      setIsLoading(false)
    }
  }


useEffect(()=>{
  getAllProduct()
},[])

async function deleteProductId(id){
  alert(id)
  let res = await deleteProduct(id)

  if(res.status===204){
    getAllProduct()
  }else{
    setError(true)
    setTimeout(()=>{
      setError(false)
    },(3000))
  }
}


    const [data,setData] = useState([])
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
        accessorFn: (row) => `${row.productFile}`,
        id: 'file',
        header: 'Photo',
        size: 80,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              maxWidth: 80,
            }}
          >
            <img
              alt={"category Pic"}
              height={50}
              src={BASEURL + "/files/" + row.original.productFile}
              loading="lazy"
            />
          </Box>
        ),
      },
      
      {
        accessorKey: "recipeName",
        header: "Recipe Name",
        Cell: ({ row }) => (
          <div
            style={{ color: row.original === selectedProduct ? "black" : "blue" }}
            onClick={() => handleNameClick(row.original)}
          >
            {row.original.recipeName}
          </div>
        ),
      },
      {
        accessorKey: "defaultPrice",
        header: "Price",
      },
      {
        accessorKey: "categoryName",
        header: "categoryName",
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
    ],[])
  return (
    <MainPage title={"Recipe"}>
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
                    {isOpen && <AddNewRecipe  show={isOpen} setShow={setIsOpen} getAllProduct={getAllProduct} />}
                    {open && <ViewRecipe  show={open} setShow={setOpen} selectedProduct={selectedProduct}  />}
                    {openEdit && <EditRecipe  show={openEdit} setShow={setOpenEdit} selectedProduct={selectedProduct}  getAllProduct={getAllProduct} />}

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
                          handleEdit(row.original);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => {
                          deleteProductId(row.original.id)
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
