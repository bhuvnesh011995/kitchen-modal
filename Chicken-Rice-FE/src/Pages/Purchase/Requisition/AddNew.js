import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../../Context/AuthContext";
import { CommonDataTable } from "../../../Components/Common/commonDataTable";
import { purchaseRequisitionOrderLines } from "../../../constants/table.constants";
import { useEffect, useState } from "react";
import { getProduct } from "../../../utility/product/product";
import { FormattedMessage } from "react-intl";
import moment from "moment";

export default function AddNew({
  show,
  setShow,
  viewModal,
  requisitionData,
  callback,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
    reset,
  } = useForm();

  const newOrderLine = {
    item: "",
    product: "",
    description: "",
    SKU: "",
    quantity: 0,
    cost: 0,
    gross: 0,
  };
  const [orderLines, setOrderLines] = useState([]);
  // const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // allRecipes();
    if (requisitionData) {
      requisitionData.requesterDeliveryDate = moment(
        requisitionData.requesterDeliveryDate
      ).format("YYYY-DD-MM");
      reset(requisitionData);
      if (requisitionData.orderLines.length) {
        setOrderLines([...requisitionData.orderLines]);
      }
    }
  }, []);

  const submitRequisitionData = async (data) => {
    try {
      toast.dismiss();
      if (!orderLines.length) {
        toast.error("Please Add Order Lines");
        return;
      }
      const OrderLinesFilled = isOrderLinesFilled();
      if (OrderLinesFilled.includes(false)) {
        toast.error("Please Enter Field Details");
        return;
      }

      data["orderLines"] = orderLines;
      if (data?._id) {
        const updatedRequisition = await api.put(
          "/purchaseRequisition/updatePurchaseRequisition",
          data
        );
        if (updatedRequisition.status == 200) {
          callback(data);
          toast.success(updatedRequisition.data.message);
        } else {
          toast.error("something went wrong");
        }
      } else {
        const newRequisition = await api.post(
          "/purchaseRequisition/addPurchaseRequisition",
          data
        );
        if (newRequisition.status == 200) {
          callback(newRequisition.data.data);
          toast.success(newRequisition.data.message);
        } else {
          toast.error("something went wrong");
        }
      }
      setShow(false);
    } catch (err) {
      console.error(err);
    }
  };

  const isOrderLinesFilled = () => {
    let OrderLinesFilled = [];
    if (orderLines.length)
      Object.keys(orderLines[orderLines.length - 1]).map((orderLine) => {
        if (typeof orderLines[orderLines.length - 1][orderLine] == "string") {
          if (!orderLines[orderLines.length - 1][orderLine].length)
            OrderLinesFilled.push(false);
        } else if (
          typeof orderLines[orderLines.length - 1][orderLine] == "number"
        ) {
          if (orderLines[orderLines.length - 1][orderLine] <= 0)
            OrderLinesFilled.push(false);
        }
      });
    return OrderLinesFilled;
  };

  const addNewOrderLineRow = () => {
    toast.dismiss();
    const OrderLinesFilled = isOrderLinesFilled();
    if (OrderLinesFilled.includes(false)) {
      toast.error("Please Enter Field Details");
      return;
    }
    setOrderLines([...orderLines, newOrderLine]);
  };

  const updateOrderLinesData = (data, type, index) => {
    if (type == "delete") {
      orderLines.splice(index, 1);
      setOrderLines([...orderLines]);
    }
  };

  // const allRecipes = async () => {
  //   try {
  //     const recipes = await getProduct();
  //     if (recipes.status == 200) {
  //       setAllProducts(recipes.data.product);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Purchase Requisition</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit(submitRequisitionData)}>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Requester Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Requester Name"
                  {...register("requesterName", {
                    required: "Please Enter Requester Name",
                  })}
                  disabled={viewModal}
                />
                {errors?.requesterName && (
                  <span className="text-danger">
                    {errors?.requesterName.message}
                  </span>
                )}
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Requester Code</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Requester Code"
                  {...register("requesterCode", {
                    required: "Please Enter Requester Code",
                  })}
                  disabled={viewModal}
                />
                {errors?.requesterCode && (
                  <span className="text-danger">
                    {errors?.requesterCode.message}
                  </span>
                )}
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Billing Address</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                  class="form-control"
                  placeholder="Enter Billing Address"
                  style={{ height: "70px !important" }}
                  {...register("billingAddress", {
                    required: "Please Enter Billing Address",
                  })}
                  disabled={viewModal}
                />
                {errors?.billingAddress && (
                  <span className="text-danger">
                    {errors?.billingAddress.message}
                  </span>
                )}
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Shipping Address</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                  class="form-control"
                  placeholder="Enter Sipping Address"
                  style={{ height: "70px !important" }}
                  {...register("shippingAddress", {
                    required: "Please Enter Shipping Address",
                  })}
                  value={
                    watch("shippingIsBilling")
                      ? watch("billingAddress")
                      : watch("shippingAddress")
                  }
                  disabled={watch("shippingIsBilling") || viewModal}
                />
                {errors?.shippingAddress && (
                  <span className="text-danger">
                    {errors?.shippingAddress.message}
                  </span>
                )}
              </div>
              <input
                type="checkbox"
                {...register("shippingIsBilling")}
                disabled={viewModal}
              />
              <label for="">
                Check if Billing address is the shipping address
              </label>
              <br />
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Requester Reference</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Requester Reference"
                  {...register("requesterReference", {
                    required: "Please Enter Requester Reference",
                  })}
                  disabled={viewModal}
                />
                {errors?.requesterReference && (
                  <span className="text-danger">
                    {errors?.requesterReference.message}
                  </span>
                )}
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Delivery Date</label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Enter Delivery Date"
                  {...register("requesterDeliveryDate", {
                    required: "Please Enter Delivery Date",
                  })}
                  disabled={viewModal}
                />
                {errors?.requesterDeliveryDate && (
                  <span className="text-danger">
                    {errors?.requesterDeliveryDate.message}
                  </span>
                )}
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label for="">Reason For Purchase</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                  class="form-control"
                  placeholder="Enter Reason For Purchase"
                  style={{ height: "70px !important" }}
                  {...register("reasonForPurchase", {
                    required: "Please Enter Reason For Purchase",
                  })}
                  disabled={viewModal}
                />
                {errors?.reasonForPurchase && (
                  <span className="text-danger">
                    {errors?.reasonForPurchase.message}
                  </span>
                )}
              </div>
            </div>
            <div class="col-md-12">
              <div class="table-wrapper">
                <div class="table-title">
                  <div class="row">
                    <div class="col-sm-6">
                      <h2>Order Lines</h2>
                    </div>
                    {!viewModal && (
                      <div class="col-sm-6">
                        <button
                          type="button"
                          class="btn btn-info add-new"
                          onClick={addNewOrderLineRow}
                        >
                          <i class="fa fa-plus"></i> Add Row
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <CommonDataTable
                  data={orderLines}
                  tableHeaders={purchaseRequisitionOrderLines}
                  actionButtons
                  deleteButton
                  inputCells
                  disableFields={viewModal}
                  callback={(data, type, index) =>
                    updateOrderLinesData(data, type, index)
                  }
                  inputTypeColumnCallback={(inputValue, inputName, index) => {
                    orderLines[index][inputName] = inputValue;
                    setOrderLines([...orderLines]);
                  }}
                  // changeSelectedColumnDataDesign={["product"]}
                  // changedDataCellColumn={(tableHeader, accessor) => {
                  //   return {
                  //     accessorKey: accessor,
                  //     header: tableHeader,
                  //     Headers: () => (
                  //       <FormattedMessage
                  //         id={tableHeader}
                  //         defaultMessage={tableHeader}
                  //       />
                  //     ),
                  //     Cell: () => (
                  //       <select {...register} className="form-select">
                  //         {allProducts.length &&
                  //           allProducts.map((product) => (
                  //             <option key={product?._id} value={product?._id}>
                  //               {product?.recipeName}
                  //             </option>
                  //           ))}
                  //         <option value="">Project 1</option>
                  //       </select>
                  //     ),
                  //   };
                  // }}
                />
              </div>
            </div>
          </div>
          <Modal.Footer>
            {!viewModal && (
              <button type="submit" class="btn btn-primary">
                {requisitionData ? "Update" : "Save"}
              </button>
            )}
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}
