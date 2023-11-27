import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import ViewCurrency from "./ViewCurrency";
import { useEffect } from "react";
import { getAllCurrency } from "../../../utility/currency/currency";
import { deleteCurrencyId } from "../../../utility/currency/currency";
export default function Currency() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const {error,setError} =useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [data,setData] = useState([])
    async function getCurrency(){
      let res = await getAllCurrency()
      if(res.status ===200){
        let array = res.data.currency.map(ele=>({
          name:ele.name,
          createdAt:ele.createdAt?.slice(0,10).split("-").reverse().join("/"),
          id:ele._id,
          code:ele.code,
          symbol:ele.symbol,
          exchangeRate:ele.exchangeRate,
        }))
  
        setData(array)
        setIsLoading(false)
      }else{
        setData([])
        setIsLoading(false)
      }
    }
    useEffect(()=>{
      getCurrency()
    },[])


    const handleNameClick = (id) => {
      setSelectedCurrency(id)
      setOpen(true);
    };
  
    
    async function deleteCurrency(id){
      let res = await deleteCurrencyId(id)
  
      if(res.status===204){
      }else{
        setError(true)
        setTimeout(()=>{
          setError(false)
        },(3000))
      }
    }
   
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
        accessorKey: "name",
        header: "currency",
        Cell: ({ row }) => (
          <div
            style={{ color: row.original === selectedCurrency ? "black" : "blue" }}
            onClick={() => handleNameClick(row.original)}
          >
            {row.original.name}
          </div>
        ),
      },
      {
        accessorKey: "code",
        header: "Currency Code",
      },
      {
        accessorKey: "exchangeRate",
        header: "Exchange Rate( USD =?)",
      },
   
     
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
    <option value="1">English</option>
    <option value="2">Chinese</option>
  </select>
</div>

<div className="text-right col-md-2" >
  <label style={{ visibility: 'hidden' }}>Default Language</label>
  <button type="submit" className="btn btn-primary">Save</button>
</div>
</div></div>
</div>
<div class="card">
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
  </div>



        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="table-wrapper">
                <div class="table-title">
                  <div class="row">
        
        
                    <div class="col-sm-12 text-end text-right">
                    {isOpen && <AddNew  show={isOpen} setShow={setIsOpen}  />}
                    {open && <ViewCurrency  show={open} setShow={setOpen} selectedCurrency={selectedCurrency}  />}

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
                          table.setEditingRow(row);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                    onClick={()=>deleteCurrency(row.original.id)}
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