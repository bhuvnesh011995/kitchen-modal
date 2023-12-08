import MainPage from "../../../Components/Common/MainPage";
import { useEffect, useMemo, useState } from "react";
import AddNew from "./AddNew";
import { api } from "../../../Context/AuthContext";
import { toast } from "react-toastify";
import { CommonDataTable } from "../../../Components/Common/commonDataTable";
import { purchaseRequisitionHeaders } from "../../../constants/table.constants";
import { FormattedMessage } from "react-intl";
import moment from "moment";
import DeleteModal from "../../../Components/commonDeleteModal";

export default function Requisition() {
  const [isOpen, setIsOpen] = useState(false);

  const [purchaseRequisitions, setPurchaseRequisitions] = useState([]);
  const [purchaseRequisitionData, setPurchaseRequisitionData] = useState(null);
  const [purchaseRequisitionIndex, setPurchaseRequisitionIndex] =
    useState(null);
  const [viewRequisitionModal, setViewRequisitionModal] = useState(false);
  const [deleteRequisitionModal, setDeleteRequisitionModal] = useState(false);

  useEffect(() => {
    getAllPurchaseRequisition();
  }, []);

  const updateRequisitions = (data) => {
    const filterRequisitions = purchaseRequisitions.filter(
      (requisition) => requisition._id == data._id
    );

    data["subTotal"] = 0;
    data["totalAmount"] = 0;

    data.orderLines.map((order) => {
      data["subTotal"] =
        data["subTotal"] + Number(order.quantity) * Number(order.gross);

      data["totalAmount"] =
        data["totalAmount"] + Number(order.quantity) * Number(order.cost);
    });

    if (filterRequisitions.length) {
      purchaseRequisitions[purchaseRequisitionIndex] = data;
      setPurchaseRequisitions([...purchaseRequisitions]);
    } else {
      setPurchaseRequisitions([...purchaseRequisitions, data]);
    }
  };

  const getAllPurchaseRequisition = async () => {
    try {
      const allPurchaseRequisitions = await api.get(
        "/purchaseRequisition/allPurchaseRequisitions"
      );
      if (allPurchaseRequisitions.status == 200) {
        allPurchaseRequisitions.data.map((requisition, index) => {
          allPurchaseRequisitions.data[index]["subTotal"] = 0;
          allPurchaseRequisitions.data[index]["totalAmount"] = 0;

          requisition.orderLines.map((order) => {
            allPurchaseRequisitions.data[index]["subTotal"] =
              allPurchaseRequisitions.data[index]["subTotal"] +
              Number(order.quantity) * Number(order.gross);

            allPurchaseRequisitions.data[index]["totalAmount"] =
              allPurchaseRequisitions.data[index]["totalAmount"] +
              Number(order.quantity) * Number(order.cost);
          });
        });
        setPurchaseRequisitions(allPurchaseRequisitions.data);
      } else {
        toast.error("something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const showNewRequisitionModal = (data, type, index) => {
    setPurchaseRequisitionData(data);
    setPurchaseRequisitionIndex(index);
    if (type == "view") {
      setViewRequisitionModal(true);
      setDeleteRequisitionModal(false);
    } else if (type == "delete") {
      setViewRequisitionModal(false);
      setDeleteRequisitionModal(true);
    } else {
      setViewRequisitionModal(false);
      setDeleteRequisitionModal(false);
    }
    if (type != "delete") setIsOpen(true);
  };

  const deleteSelectedRequisition = async (data) => {
    try {
      const deleteRequisition = await api.delete(
        "/purchaseRequisition/deletePurchaseRequisition/" + data?._id
      );
      if (deleteRequisition.status == 200) {
        const filterRequisitions = purchaseRequisitions.filter(
          (requisition) => requisition._id != data._id
        );
        setPurchaseRequisitions([...filterRequisitions]);
        toast.success(deleteRequisition.data.message);
      } else {
        toast.error("something Went wrong ");
      }
      setDeleteRequisitionModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainPage title={"Purchase Requisition"}>
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
                      <button
                        onClick={() => showNewRequisitionModal()}
                        type="button"
                        class="btn btn-primary"
                      >
                        <i class="fa fa-plus"></i> Add New
                      </button>
                    </div>
                  </div>
                </div>
                <CommonDataTable
                  data={purchaseRequisitions}
                  tableHeaders={purchaseRequisitionHeaders}
                  actionButtons
                  deleteButton
                  editButton
                  viewButton
                  changeSelectedColumnDataDesign={["created_at"]}
                  changedDataCellColumn={(tableHeader, accessor) => {
                    if (accessor == "created_at")
                      return {
                        accessorKey: accessor,
                        header: tableHeader,
                        Header: () => (
                          <FormattedMessage
                            id={tableHeader}
                            defaultMessage={tableHeader}
                          />
                        ),
                        Cell: ({ row }) => (
                          <div>
                            {moment(row.original.created_at).format(
                              "DD-MM-YYYY"
                            )}
                          </div>
                        ),
                      };
                  }}
                  callback={(data, type, index) =>
                    showNewRequisitionModal(data, type, index)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <AddNew
            show={isOpen}
            setShow={setIsOpen}
            viewModal={viewRequisitionModal}
            requisitionData={purchaseRequisitionData}
            callback={(data) => updateRequisitions(data)}
          />
        )}
      </div>
      {deleteRequisitionModal && (
        <DeleteModal
          deleteHeader={"Purchase Requisition"}
          show={deleteRequisitionModal}
          setShow={setDeleteRequisitionModal}
          deleteMessage={`Do you really want to delete ${purchaseRequisitionData.requesterName} Purchase Requisition . `}
          data={purchaseRequisitionData}
          callback={(requisition) => deleteSelectedRequisition(requisition)}
        />
      )}
    </MainPage>
  );
}
