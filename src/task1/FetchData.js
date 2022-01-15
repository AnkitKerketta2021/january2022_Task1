import axios from "axios";
import React, { useState } from "react";
import { Input } from "reactstrap";
import DisplayData from "./components/Table/DisplayData";
import "./FetchData.css";
import getLocalData from "./checklocalStorage";
import AddModal from "./components/Table/Add/AddModal";

function FetchData() {
  const [data, setdata] = useState(getLocalData);
  const [searchItem, setsearchItem] = useState("");
  const [showGetButton, setshowGetButton] = useState(true);
  const [showNullButton, setshowNullButton] = useState(false);
  const [valAndNull, setvalAndNull] = useState("val");
  const [showAddModal, setshowAddModal] = useState(false);

  //!====================== Fetch Data ========================
  const fetchTheData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      if (response.data.error) {
        alert(response.error.message);
      } else {
        alert("Data Fetched Successfully");
      }
      setdata(response.data);

      //!=================== Set Fetched Data to The Local Storage =================
      localStorage.setItem("localData", JSON.stringify(response.data));
    } catch (err) {
      alert(err);
    }
    setshowGetButton(!showGetButton);
    setshowNullButton(!showNullButton);
  };

  // !=================== Clear Local Storage ====================
  const clearStorage = () => {
    localStorage.clear();
    setshowNullButton(!showNullButton);
    window.location.reload();
  };
  // !========================== Show AddData Modal ==========================
  const addDataModal = () => {
    setshowAddModal(!showAddModal);
  };

  // !======================== DELETE =========================
  const deleteThis = id => {
    const dataCopy = [...data];
    dataCopy.splice(id, 1);
    setdata(dataCopy);
  };

  // !============================= ADD ==============================
  const addDataToLocalStorage = childData => {
    console.log("CHILD-DATA", childData);
    const dataCopy = [...data];
    dataCopy.push(childData);

    localStorage.setItem("localData", JSON.stringify(dataCopy));
    setdata(dataCopy);
  };

  // !============================= Edit ==============================

  // ?===========================================================================================
  // ?======================================= RETURN ============================================
  // ?===========================================================================================

  return (
    <div>
      <br />
      {/*//! ============================ Add Modal ============================ */}
      {showAddModal &&
        <AddModal
          addDataToLocalStorage={addDataToLocalStorage}
          showAddModal={showAddModal}
        />}

      {/*//! ============================ Null Button ============================ */}
      {showNullButton &&
        <div>
          <button
            className="ms-1 btn btn-danger"
            onClick={() => setvalAndNull(!valAndNull)}
          >
            Null
          </button>{" "}
          <button onClick={clearStorage} className="btn btn-warning">
            Clear LocalStorage
          </button>
        </div>}
      <br />
      <br />

      {/*//! ============================ Get Data Button & Search Box ============================= */}
      {showGetButton
        ? <div>
            <button
              onClick={fetchTheData}
              // id="getButton"
              className="btn btn-outline-primary getButton"
            >
              Get Data
            </button>{" "}
          </div>
        : <Input
            className="getButton"
            style={{ width: "300px", margin: "auto", padding: "10px" }}
            placeholder="Search..."
            onChange={event => {
              setsearchItem(event.target.value);
            }}
          />}

      {/* //!======================= Add Data Button ========================== */}
      <button
        className="btn btn-outline-success mt-2 getButton"
        onClick={addDataModal}
      >
        Add Data
      </button>
      <div className="container mt-3">
        <h3>Body</h3>
        <hr />

        {/*//! ========================= DisplayData Component ====================== */}
        <DisplayData
          showNullButton={showNullButton}
          valAndNull={valAndNull}
          deleteThis={deleteThis}
          data={data}
          searchItem={searchItem}
        />
      </div>
    </div>
  );
}

export default FetchData;
