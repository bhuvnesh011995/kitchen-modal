import { Modal } from "react-bootstrap";

export default function DeleteModal({
  deleteHeader,
  show,
  setShow,
  deleteMessage,
  data,
  callback,
}) {
  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete {deleteHeader}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div class="row">{deleteMessage}</div>
        <Modal.Footer>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              callback(data);
            }}
          >
            Delete
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setShow(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}
