import "./App.css";
import { Route, Routes } from "react-router-dom";
import ApiComponent from "./ApiComponent";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<ApiComponent />} />
      </Routes>
    </>
  );
}

export default App;
