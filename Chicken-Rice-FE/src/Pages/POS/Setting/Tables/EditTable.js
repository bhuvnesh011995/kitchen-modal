import { Modal } from "react-bootstrap";

export default function EditTable({show,setShow}) {

    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit / Delete Table</Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
        <table class="table table-bordered table-responsive">
                        <thead>
                            <tr>
                                <th>Table Number</th>
                                <th>Seating Capacity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <a  title="save" data-toggle="tooltip"><i class="bx bxs-save"></i></a>
                                    <a  title="edit" data-toggle="tooltip"><i class="bx bx-edit"></i></a>
                                    <a title="delete" data-toggle="tooltip"><i class="bx bx-trash"></i></a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
        </Modal.Body>
        <div class="modal-footer" style={{display: "inline-block", textAlign: "right"}}>
                    <button type="button" class="btn btn-danger">Save</button>
                </div>
      </Modal>
    )
};
