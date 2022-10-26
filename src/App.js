import "./App.css";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
