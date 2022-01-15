import "./App.css";
import MainApp from "./task1/MainApp";
import "bootstrap/dist/css/bootstrap.min.css";
import EnhancedTable from "./task1/components/DataTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <EnhancedTable /> */}
        <MainApp />
      </header>
    </div>
  );
}

export default App;
