import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Authentication from "./components/Authentication/Authentication";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={true ? <HomePage /> : <Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
