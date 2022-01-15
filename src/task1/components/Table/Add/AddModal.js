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
  const AddModalData = () => {
    props.addDataToLocalStorage(modalData);
    setShow(false);
  };
  const UpdateAddModalInput = event => {
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
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            placeholder="Name"
            name="name"
            value={modalData.name}
            onChange={UpdateAddModalInput}
            className="mb-2"
          />
          <Input
            placeholder="Email"
            name="email"
            value={modalData.email}
            onChange={UpdateAddModalInput}
            className="mb-2"
          />
          <Input
            placeholder="Body"
            name="body"
            value={modalData.body}
            onChange={UpdateAddModalInput}
            className="mb-2"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={AddModalData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModal;
