import MaterialReactTable from "material-react-table";
import MainPage from "../../../Components/Common/MainPage";
import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ViewMobileOrder from "./ViewMobileOrder";
export default function MobileOrder() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [open, setOpen] =useState(false)
 const handleNameClick = (orderId) => {
   setSelectedOrder(orderId);
   console.log("CATEGORY",orderId)
   setOpen(true);
 };
    const [data,setData] = useState([
        {
            orderId:"#68695979",
            customerName:"ravi kumar",
            mode:"Cash",
            orderDetails:"2 Plate Chicken Rice",
            payMentMode:"Cash",
            amount:'$78.0',
            status:"Ready"
        }
    ])
    const columns = useMemo(()=>[
 
      
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
        accessorKey: "orderDetails",
        header: "Order Details",
      },
      {
        accessorKey: "mode",
        header: "Payment Mode",
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
    ],[])
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
    <MainPage title={"Mobile Order "}>
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
                    {open && <ViewMobileOrder  show={open} setShow={setOpen}  />}
                      {/* <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa fa-plus"></i> Add New</button> --> */}
                    </div>
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
