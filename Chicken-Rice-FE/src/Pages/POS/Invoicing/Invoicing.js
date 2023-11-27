
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useMemo, useState } from "react";
import MainPage from "../../../Components/Common/MainPage";
import Common from '../../../Components/Common/Common';

let data = [
  {
    invoiceNo: "#000123456",
    date: "2023-08-12",
    customerName: "James Jhon",
    mode: "Cash",
    amount: "$52.04",
    status:"Success"
  },
];
export default function InvoicingPos() {
  const [start,setStart] = useState(null)
  const [end,setEnd] = useState(null)
  const [tableData,setTableData] = useState(data)


  const columns = useMemo(
    () => [
      {
        accessorKey: "invoiceNo",
        header: "Invoice No",
      },
      {
        accessorKey: "date",
        header: "Invoice Date",
      },
      {
        accessorKey: "customerName",
        header: "Customer Name",
      },
      {
        accessorKey: "amount",
        header: "Grand Total",
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
      {
        accessorKey: "mode",
        header: "Payment Mode",
      },
    ],
    []
  );

  const filterdata = useMemo(()=>customDateRangeFilter(tableData),[tableData,start,end])

  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.

    tableData[row.index] = values;

    //send/receive api updates here

    setTableData([...tableData]);

    exitEditingMode(); //required to exit editing mode
  };



  function customDateRangeFilter(rows){
    if(!start && !end) return rows
    else{
      if(!end){
        return rows.filter((row) => {

          const dateValue = new Date(row.date);
          return dateValue >=new Date(start) ? true:false;
        });
      }
      else if(!start){
        return rows.filter((row) => {
          const dateValue = new Date(row.date);
          return dateValue <= new Date(end) ? true : false
        });
      }else{
        return rows.filter((row) => {
          const dateValue = new Date(row.date);
          return dateValue >=new Date(start) && dateValue <=new Date(end) ? true : false
        });
      }
    }
  }

  return (
    <Common sidebar={"POS"}>
    <MainPage title={"Invoicing"}>
      <div class="row">
        <div class="col-sm-6">
          
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">From Date</label>
                <input onChange={(e)=>setStart(e.target.value)} type="date" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">To Date</label>
                <input onChange={(e)=>setEnd(e.target.value)} type="date" class="form-control" placeholder="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MaterialReactTable
        columns={columns}
        data={filterdata}
        enableFullScreenToggle={false}
        enableDensityToggle={false}
        enableHiding={false}
        enableColumnFilters={false}
        enableGlobalFilterModes
        initialState={{
          showGlobalFilter: true,
        }}
        positionGlobalFilter="right"
        enableFilterMatchHighlighting={false}
        enableRowNumbers
        rowNumberMode="static"
        enableRowActions
        positionActionsColumn="last"
        renderRowActions={({ row, table }) => (
          <Box
            sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
          >
            <IconButton
              color="error"
              onClick={() => {
                tableData.splice(row.index, 1); //assuming simple data table
                setTableData([...tableData]);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      />
      </MainPage>
      </Common>
  );
}

