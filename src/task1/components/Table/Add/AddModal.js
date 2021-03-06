import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Input } from "reactstrap";

function AddModal(props) {
  const [show, setShow] = useState(true);
  const [modalData, setmodalData] = useState({
    postId: "",
    id: props.data.length + 1,
    name: "",
    email: "",
    body: ""
  });

  //!======================= Add Modal Data =====================
  const addModalData = () => {
    props.addDataToLocalStorage(modalData);
    setShow(false);
  };
  const updateAddModalInput = event => {
    setmodalData({
      ...modalData,
      [event.target.name]: event.target.value
    });
  };

  const handleClose = () => {
    setShow(false);
    props.addDataModalHide(false);
  };
  // const handleShow = () => setShow(true);
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            placeholder="Name"
            name="name"
            value={modalData.name}
            onChange={updateAddModalInput}
            className="mb-2"
          />
          <Input
            placeholder="Email"
            name="email"
            value={modalData.email}
            onChange={updateAddModalInput}
            className="mb-2"
          />
          <Input
            placeholder="Body"
            name="body"
            value={modalData.body}
            onChange={updateAddModalInput}
            className="mb-2"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={addModalData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModal;
