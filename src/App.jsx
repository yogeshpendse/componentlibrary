import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Docspage } from "./pages/Docspage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/docs" element={<Docspage />} />
      </Routes>
    </>
  );
};

export default App;
