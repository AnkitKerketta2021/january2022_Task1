import React, { useState } from "react";
import { Table } from "react-bootstrap";
import EditModal from "./Edit/EditModal";

function DisplayData(props) {
  const [showEditModal, setshowEditModal] = useState(false);

  //!================================= Edit Modal ==============================
  const EditThis = () => {
    setshowEditModal(!showEditModal);

  };

  return (
    <div>
      {/*//! ============================ Edit Modal ============================ */}
      {showEditModal?
        <EditModal
          // EditDataToLocalStorage={EditDataToLocalStorage}
          showEditModal={showEditModal}
        />:""}

      {props.data
        .filter((val, index) => {
          if (props.searchItem === "") {
            return props.valAndNull;
          } else if (
            val.body.toLowerCase().includes(props.searchItem.toLowerCase())
          ) {
            return val;
          } 
         
          else if (
            val.email.toLowerCase().includes(props.searchItem.toLowerCase())
          ) {
            return val;
          }
          
        })
        .map((val, index) => {
          return (
            <div className="mb-5 pb-1" id="fetchContainer" key={index}>
              <Table bordered className=" border-dark">
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>#Name</th>
                    <th>#Email</th>
                    <th>#Body</th>
                  </tr>
                </thead>
                {/* <Form> */}
                <tbody>
                  <tr style={{ color: "#fff" }}>
                    <td>
                      {" "}<h5 id="dataId" className="ms-3">
                        {val.id}
                      </h5>
                    </td>
                    <td>
                      {val.name}
                    </td>
                    <td>
                      {" "}<p
                        style={{
                          color: "black",
                          background: "orange",
                          padding: "5px",
                          borderRadius: "12px"
                        }}
                      >
                        {val.email}
                      </p>
                    </td>
                    <td>
                      {val.body}
                    </td>
                  </tr>
                </tbody>
                {/* </Form> */}
              </Table>

              <button
                id="deleteBtn"
                className="btn btn-danger mb-2 me-4 "
                onClick={() => props.deleteThis(index)}
              >
                Delete
              </button>
              <button
                id="deleteBtn"
                className="btn btn-success mb-2 me-4 "
                onClick={() => EditThis(index)}
              >
                Edit
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default DisplayData;
