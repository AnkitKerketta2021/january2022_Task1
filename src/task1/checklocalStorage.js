//!=================== Check Local Storage =================
const getLocalData = () => {
    let localStorageData = localStorage.getItem("localData");
    if (localStorageData) {
      return JSON.parse(localStorage.getItem("localData"));
    } else return [];
  };
  export default getLocalData