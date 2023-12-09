import { MaterialReactTable } from "material-react-table";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";

export const CommonDataTable = ({
  data,
  tableHeaders,
  actionButtons,
  editButton,
  deleteButton,
  callback,
  viewButton,
  inputCells,
  disableFields,
  inputTypeColumnCallback,
  tableSearchBar = true,
  enableRowNumbers = true,
  changeSelectedColumnDataDesign,
  changedDataCellColumn,
}) => {
  const dataKeys = Object.keys(tableHeaders);
  const tableColumns = [];
  dataKeys.map((e, index) => {
    if (
      changeSelectedColumnDataDesign &&
      changeSelectedColumnDataDesign.includes(e)
    ) {
      tableColumns.push(changedDataCellColumn(tableHeaders[e], e));
      return;
    }

    tableColumns.push({
      accessorKey: e,
      header: tableHeaders[e],
      Header: () => (
        <FormattedMessage
          id={tableHeaders[e]}
          defaultMessage={tableHeaders[e]}
        />
      ),
    });
    if (inputCells)
      tableColumns[index]["Cell"] = ({ row, index }) => (
        <div>
          <input
            type={
              typeof row.original[e] == "string"
                ? "text"
                : typeof row.original[e] == "number"
                ? "number"
                : typeof row.original[e] == "date"
                ? "date"
                : "text"
            }
            class="form-control"
            onChange={({ target }) => {
              inputTypeColumnCallback(target.value, e, row.index);
            }}
            disabled={disableFields}
            value={row.original[e]}
            placeholder={`${tableHeaders[e]}`}
          />
        </div>
      );
  });
  console.log(disableFields);
  if (actionButtons) {
    tableColumns.push({
      header: "Actions",
      Header: () => (
        <FormattedMessage id="Actions" defaultMessage={"Actions"} />
      ),
      Cell: ({ row }) => (
        <div className="hstack gap-2 fs-1">
          {viewButton && (
            <button
              disabled={disableFields}
              onClick={() => callback(row.original, "view", row.index)}
              className="btn btn-icon btn-sm btn-warning rounded-pill"
            >
              <i className="mdi mdi-eye"></i>
            </button>
          )}
          {editButton && (
            <button
              disabled={disableFields}
              onClick={() => {
                callback(row.original, null, row.index);
              }}
              className="btn btn-icon btn-sm btn-info rounded-pill"
            >
              <i className="bx bxs-edit-alt" />
            </button>
          )}
          {deleteButton && (
            <button
              disabled={disableFields}
              onClick={() => callback(row.original, "delete", row.index)}
              className="btn btn-icon btn-sm btn-danger rounded-pill"
            >
              <i className="bx bxs-trash" />
            </button>
          )}
        </div>
      ),
    });
  }

  return (
    <div className="p-3">
      <MaterialReactTable
        columns={tableColumns}
        data={data}
        enableFullScreenToggle={false}
        enableDensityToggle={false}
        enableHiding={false}
        enableColumnFilters={false}
        positionGlobalFilter="right"
        initialState={{
          showGlobalFilter: true,
        }}
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
      />
    </div>
  );
};
