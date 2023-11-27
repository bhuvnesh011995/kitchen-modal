import MaterialReactTable from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import BASEURL from "../../../../Config/Config";
import AddNewRecipe from "./AddNewRecipe";
import { getRecipes } from "../../../../utility/recipe/recipe";


export default function RecipeTable() {
    const [isOpen,setIsOpen] = useState(false)
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)



    async function getAllRecipe(){
      let res = await getRecipes()
      if(res.status ===200){
        let array = res.data.recipes.map(ele=>({
          recipeName:ele.name,
          recipesPhoto:ele.photo,
          recipeIngredient:ele.ingradients.map(ele=>ele.name).join(),
          recipePrice:ele.totalcost,
          createdAt:ele.createdAt?.slice(0,10).split("-").reverse().join("/"),
          category:ele.category?.name
        }))

        setData(array)
        setIsLoading(false)
      }else{
        setData([])
        setIsLoading(false)
      }
    }


useEffect(()=>{
  getAllRecipe()
},[])

  const columns = useMemo(()=>[
    {
      accessorKey: "recipeName",
      header: "Recipe Name",
    },
    {

      accessorFn: (row) => `${row.recipesPhoto}`,
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
            src={BASEURL+"/files/"+row.original.recipesPhoto}
            loading="lazy"
          />
        </Box>
      ),
    },
    {
      accessorKey: "recipeIngredient",
      header: "Recipe Ingredient",
    },
    {
      accessorKey: "recipePrice",
      header: "Recipe Price",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
    },
    {
      accessorKey: "category",
      header: "Category Name",
    },
    
  ],[]);
  return (
    <>
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6"></div>
            <div class="col-sm-6 text-end">
            {isOpen && <AddNewRecipe getAllRecipe={getAllRecipe} show={isOpen} setShow={setIsOpen}/>}
              <button
              onClick={()=>setIsOpen(true)}
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
        state={{isLoading}}
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
        sx: { width: '200px' },
        variant: 'outlined',
      }}
        enableColumnActions={false}
      muiTableProps={{
        sx: {
          border: '1px solid rgba(232, 237, 234, 1)',
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          border: '0.75px solid rgba(232, 237, 234, 1)',
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          border: '0.5px solid rgba(232, 237, 234, 1)',
        },
      }}
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
                  data.splice(row.index, 1);
                  setData([...data]);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        />
      </div>
    </>
  );
}
