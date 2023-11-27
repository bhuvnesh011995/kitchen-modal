import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton,Icon } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ViewOrder from "./ViewOder";
import { getOrder } from "../../../utility/recipe/recipe";
import { useEffect } from "react";
import AddNewOrder from "./AddNewOrder";
export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
   const [open, setOpen] =useState(false)
   const [isOpen, setIsOpen] =useState(false)
  const [loading ,setIsLoading] =useState(false)

  const handleNameClick = (orderId) => {
    setSelectedOrder(orderId);
    console.log("CATEGORY",orderId)
    setOpen(true);
  };

  async function getAllOrder(){
    let res = await getOrder()
    if(res.status ===200){
      let array = res.data.allOrder.map(ele=>({
        orderId:ele.orderId,
        customerName:ele.customerName,
        orderDetails:ele.orderDetails,
        product:ele.product,
        size:ele.size,
        addons:ele.addons,
        note:ele.note,
        qty:ele.qty,
        createdAt:ele.createdAt?.slice(0,10).split("-").reverse().join("/"),
        update: ele.updatedAt?.slice(0, 10).split("-").reverse().join("/"), 
        payMentMode: ele.payMentMode, 
        status:ele.status,
        cost: ele.cost, 
        totalcosts:ele.totalcosts,
        email: ele.email, 
        contact:ele.contact,
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
    getAllOrder()
  },[])
  

  const [data, setData] = useState([]);

  const columns = useMemo(() => [
    {
      accessorKey: 'serialNumber',
      header: "SL.No",
      Cell: ({ row }) => {
        return <div>{row.index + 1}</div>;
      },
      size: 50
    },
    
    {
      accessorKey: "orderId",
      header: "Order Id",
      Cell: ({ row }) => (
        <div
          style={{ color: row.original === selectedOrder ? "blue" : "blue" }}
          onClick={() => handleNameClick(row.original)}
        >
          {row.original.orderId}
        </div>
      ),
    },
    {
      accessorKey: "customerName",
      header: "Customer Name",
    },
  
    {
      accessorKey: "payMentMode",
      header: "Payment Mode",
    },
    {
      accessorFn: (row) => row.status,
      id: "status",
      header: "Status",
      Cell: ({ renderedCellValue, row }) => (
        <div
          style={{
            color: renderedCellValue === "complete" ? "green" : "red",
          }}
        >
          {renderedCellValue}
        </div>
      ),
    },
  ]);

  const tooltip = (
    <Tooltip id="tooltip">
      <strong>accept</strong> 
    </Tooltip>
  );
  const reject = (
    <Tooltip id="reject">
      <strong>reject</strong> 
    </Tooltip>
  );

  return (
    <MainPage title={"All Orders "}>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2></h2>
                    </div>
                    <div className="col-sm-6 text-end">
                    {isOpen  && <AddNewOrder  show={isOpen} setShow={setIsOpen}  getAllOrder={getAllOrder} />}
                    {open  && <ViewOrder  show={open} setShow={setOpen}  selectedOrder={selectedOrder} />}
                    <button
                onClick={() => setIsOpen(true)}
                type="button"
                class="btn btn-primary"
              >
                <i class="fa fa-plus"></i> Add New
              </button>                       </div>
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
                          <OverlayTrigger placement="top" overlay={tooltip}>
                        <IconButton
                          color="default"
                        
                          onClick={() => {
                          
                          }}
                        >
                             <CheckCircleOutlineIcon />
                        
                        </IconButton>
                      </OverlayTrigger>
                      <OverlayTrigger placement="top" overlay={reject}>
  <IconButton
    color="default"
    onClick={() => {
    
    }}
  >
    <HighlightOffIcon/>
  </IconButton>
</OverlayTrigger>
                     
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
