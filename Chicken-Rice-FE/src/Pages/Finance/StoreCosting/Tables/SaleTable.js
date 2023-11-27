
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useMemo, useState } from "react";

let data = [
  {
    dishesName: "Dal Bati",
    costPrice: "$50",
    quantity: "100",
    totalPrice: "$5000",
  },
];
export default function SalesTable() {
  const [start,setStart] = useState(null)
  const [end,setEnd] = useState(null)
  const [tableData,setTableData] = useState(data)


  const columns = useMemo(
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
        accessorKey: "dishesName",
        header: "Dishes Name",
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
      },
      {
        accessorKey: "costPrice",
        header: "Cost Price",
      },
      {
        accessorKey: "totalPrice",
        header: "Total Price",
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
    <>
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
        enableFilterMatchHighlighting={false}
        rowNumberMode="static"
        enableRowActions
        positionActionsColumn="last"
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
                tableData.splice(row.index, 1); //assuming simple data table
                setTableData([...tableData]);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      /></>
  );
}
