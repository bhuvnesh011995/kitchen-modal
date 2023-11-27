import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useEffect } from "react";
import AddNew from "./AddNew";
import { getFixedItem } from "../../../utility/recipe/recipe";
import { deleteFixed } from "../../../utility/recipe/recipe";

export default function FixedAssets() {
  const [isOpen,setIsOpen] = useState(false)
  const [data, setData] = useState([]);
  const [error,setError] = useState(false)

  async function getFixedItems() {
    try {
      let res = await getFixedItem();
      console.log("ddd", res.data);
      if (res.status === 200 && Array.isArray(res.data)) {
        let array = res.data.map((ele) => ({
          category: ele.category,
          name: ele.name,
          code: ele.code,
          working: ele.working,
          assign: ele.assign,
          company: ele.company,
          createdAt: ele.createdAt?.slice(0, 10).split("-").reverse().join("/"),
          id: ele._id,
        }));
        console.log("jbsdkbvd", array);
        setData(array);
      } else {
        console.error("Data is undefined or empty:", res);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  



  useEffect(()=>{
    getFixedItems()
  },[])


  async function deletefixed(id){
    alert(id)
    let res = await deleteFixed(id)

    if(res.status===204){
      getFixedItems()
    }else{
      setError(true)
      setTimeout(()=>{
        setError(false)
      },(3000))
    }
  }


    // const [data,setData] = useState([{
    //     assetsName:"asset 1",
    //     catagory:"catagory 1",
    //     companyAssetsCode:"hfg54",
    //     isWorking:"True",
    //     assignTo:"bhuvnesh",
    //     company:"Chicken Rice"
    // }])
  let columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'SL.No',
        Cell: ({ row }) => (
          <div>{row.index + 1}</div>
        ),
        size: 50,
      },
      {
        accessorKey: "name",
        header: "Assets Name",
      },
      {
        accessorKey: "category",
        header: "Catagory",
      },
      {
        accessorKey: "code",
        header: "Company Assets Code",
      },
      {
        accessorKey: "working",
        header: "Is Working",
      },
      {
        accessorKey: "assign",
        header: "Assign To",
      },
      {
        accessorKey: "company",
        header: "Company",
      },
    ],
    []
  );

  return (
    <MainPage title={"Fixed Assets "}>                     
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
                        // onClick={() => {
                        //   data.splice(row.index, 1); //assuming simple data table
                        //   setData([...data]);
                        // }}
                        onClick={() => {
                          deletefixed(row.original.id)
                        }}
                      >
                        <DeleteIcon      />
                      </IconButton>
                    </Box>
                  )}
                />
              </div>
              <MainPage></MainPage>
            </div>
          </div>
        </div>
        {isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
      </div>
      </MainPage>    
  );
}

