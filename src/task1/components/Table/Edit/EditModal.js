import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Input } from "reactstrap";
import FetchData from "../../../FetchData";
import { MyProvider } from "../../context/context";

function EditModal(props) {
  const [show, setShow] = useState(true);
  const [type, settype] = useState("")
  const [modalData, setmodalData] = useState({
    postId: "",
    id: props.selectDataToEdit.id,
    name: props.selectDataToEdit.name,
    email: props.selectDataToEdit.email,
    body: props.selectDataToEdit.body
  });

  //!======================= Edit Modal Data =====================
  const editModalData = () => {
    setShow(false);
    props.editDataModalHide(false)

  }
  // const editModalData = () => {
  //   settype("edit")
  //   setShow(false);
  //   setmodalData({
  //   id: modalData.id,
  //   name:modalData.name,
  //   email: modalData.email,
  //   body: modalData.body
  //   })
  //   props.editDataModalHide(false)
  // };
  console.log("Edit Modal:",modalData);

  //!======================== Update Input Field =======================
  const updateEditModalInput = event => {
    setmodalData({
      ...modalData,
      [event.target.name]: event.target.value
    });
  };

  const handleClose = () => {
    setShow(false);
    props.editDataModalHide(false);
  };
  return (
    <div>
      {true &&
        <MyProvider value={{datas:modalData,id:props.selectDataToEdit.id,type:type}}>
          <span style={{display:"none"}}> <FetchData /></span>
        </MyProvider>}

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
            onChange={updateEditModalInput}
            className="mb-2"
          />
          <Input
            placeholder="Email"
            name="email"
            value={modalData.email}
            onChange={updateEditModalInput}
            className="mb-2"
          />
          <Input
            placeholder="Body"
            name="body"
            value={modalData.body}
            onChange={updateEditModalInput}
            className="mb-2"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={editModalData}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditModal;
