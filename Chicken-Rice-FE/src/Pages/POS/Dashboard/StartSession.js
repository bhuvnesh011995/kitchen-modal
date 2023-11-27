import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function StartSession({show,setShow}) {
    const navigate = useNavigate()
    return (
        <Modal  show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Opening Cash Control</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row mb-3">
                        <div class="col-md-7">
                            <h3>Opening Cash</h3>
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="modal-form form-control" placeholder=""/>
                        </div>
                        <div class="col-md-2">
                            <a style={{fontSize: "25px"}}><i class="fa fa-calculator"></i></a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label for=""></label>
                                <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "90px"}}
                                    placeholder="Add an opening note"></textarea>
                            </div>
                        </div>
                    </div>
          </Modal.Body>
          <div class="modal-footer" style={{justifyContent: "end"}}>
                    <button onClick={()=>navigate("/pos/setting/tables")} type="button" class="btn btn-primary">Open Sessions</button>
                </div>
        </Modal>
    )
};
