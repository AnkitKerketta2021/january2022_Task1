import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Input } from "reactstrap";

function EditModal(props) {
  const [show, setShow] = useState(true);
  const [modalData, setmodalData] = useState({
    postId: "",
    id: "",
    name: "",
    email: "",
    body: ""
  });

  
  useEffect(() => {
    setmodalData({ ...props.selectedItem })
  }, [props.selectedItem])

  //!======================= Edit Modal Data =====================
  const EditModalData = () => {
    props.EditDataToLocalStorage(modalData);
    props.data(modalData)
    setShow(false);
  };

  //!======================== Update Input Field =======================
  const UpdateEditModalInput = event => {
    setmodalData({
      ...modalData,
      [event.target.name]: event.target.value
    });
  };

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            placeholder="Name"
            name="name"
            value={modalData.name}
            onChange={UpdateEditModalInput}
            className="mb-2"
          />
          <Input
            placeholder="Email"
            name="email"
            value={modalData.email}
            onChange={UpdateEditModalInput}
            className="mb-2"
          />
          <Input
            placeholder="Body"
            name="body"
            value={modalData.body}
            onChange={UpdateEditModalInput}
            className="mb-2"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={EditModalData}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditModal;