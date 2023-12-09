import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useCallback, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import { addCurrency, deleteCurrencyById, getAllCurrency, updateCurrency } from "../../../utility/currency/currency";
import useCustomEffect from "../../../utility/CustomHook/useCustomEffect";
import { toast } from "react-toastify";

export default function Currency() {
  const [isOpen, setIsOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);
    const [data,setData] = useState([])
    async function getCurrency(){
      let res = await getAllCurrency()
      if(res.status ===200){
        setData(res.data)
      }else{
      }
    }
    useCustomEffect(getCurrency)
const addNewCurrency = useCallback(async currData=>{
  try {
    let res = await addCurrency(currData)
    if(res.status===200){
      toast.success("currency added successfully")
      setData(preVal=>([...preVal,res.data]))
      setIsOpen(false)
    }else{
      toast.error("error occured while added currency")
    }
  } catch (error) {
    toast.error("some error occured")
  }
},[])

    const updateCurrencyData = useCallback(async (id,currData)=>{
      try {
        let res = await updateCurrency(id,currData)
        if(res.status===200){
          toast.success("currency updated")
          let arr = data.map(ele=>(ele._id===id?res.data:ele))
          setData(arr)
          setIsOpen(false)
        }else{
          toast.error("error while updating currency")
        }
      } catch (error) {
        console.log(error)
        toast.error("some error occured")
      }
    },[data])
    const columns = useMemo(()=>[
      {
        accessorKey: "name",
        header: "currency",
      },
      {
        accessorKey: "code",
        header: "Currency Code",
      },
      {
        accessorKey:"symbol",
        header:"Symbol"
      },
      {
        accessorKey: "exchangeRate",
        header: "Exchange Rate",
      }
    ],[])
  return (
    <MainPage title={"language"}>
      <div class="row">
      <div class="card">
    
            <div class="card-body">
            <div className="col-md-12 ">
        System Default Currency
        </div>
      <div class="row" style={{backgroundColor:'#fff',marginTop:'12px'}}>
       
      <div className="form-group col-md-10" >
        <label>System Default Currency</label>
        <select name="" id="" className="form-select">
          <option value="0">-- Select --</option>
        </select>
     </div>

      <div className="text-right col-md-2" >
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </div>
    </div>
</div>
{/* <div class="card">
            <div class="card-body">
<div class="row" style={{backgroundColor:'#fff',marginTop:'15px'}}>
<div className="form-group col-md-12" >
  Set Currency Formats
</div>
<div className="form-group col-md-4" >
  <label>Symbol Formats</label>
  <select name="" id="" className="form-select">
    <option value="0">-- Select --</option>
    <option value="1">English</option>
    <option value="2">Chinese</option>
  </select>
</div>
<div className="form-group col-md-4" >
  <label>Decimal Separator</label>
  <select name="" id="" className="form-select">
    <option value="0">-- Select --</option>
    <option value="1">English</option>
    <option value="2">Chinese</option>
  </select>
</div>
<div className="form-group col-md-4" >
  <label>No of decimals</label>
  <select name="" id="" className="form-select">
    <option value="0">-- Select --</option>
    <option value="1">English</option>
    <option value="2">Chinese</option>
  </select>
</div>
<div className="text-left " style={{textAlign:'right'}}>
  <button type="submit" className="btn btn-primary">Save</button>
  </div>
  </div>
  </div>
  </div> */}



        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="table-wrapper">
                <div class="table-title">
                  <div class="row">
                    <div class="col-sm-12 text-end text-right">
                    {isOpen && <AddNew addNew={addNewCurrency} update={updateCurrencyData} data={updateData} setData={setUpdateData}  show={isOpen} setShow={setIsOpen}  />}
              <button
              className="text-right"
                onClick={() => setIsOpen(true)}
                type="button"
                class="btn btn-primary"
              >
                <i class="fa fa-plus"></i> Add New
              </button>                    </div>
                  </div>
                </div>
                <MaterialReactTable
                enableRowNumbers
                rowNumberMode="static"
                data={data||[]}
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
                          setUpdateData(row.original)
                          setIsOpen(true)
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                    onClick={async()=>{
                      try{
                        let res = await deleteCurrencyById(row.original._id)
                      if(res.status===204){
                        toast.success("currency deleted")
                        let arr = data.filter(ele=>ele._id!=row.original._id)
                        setData(arr)
                      }else{
                        toast.error('error occured while deleting currency')
                      }
                      }catch(err){
                        console.log(err)
                        toast.error('some error occured')
                      }
                      
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

