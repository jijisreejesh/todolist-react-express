import "./App.css";
import Display from "./components/Display";
import Index from "./components/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>ToDo-List</h1>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/view" element={<Display/>}></Route>
          <Route path="/update_details/:id" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
