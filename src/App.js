import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import Play from "./pages/Play";
import Details from "./pages/Details";
import LayoutWithHeaderFooter from "./layouts/LayoutWithFooter";
import LayoutWithoutHeaderFooter from "./layouts/LayoutWithoutFooter";

function App() {

  return (
    <Router>
      <main className="h-auto w-[100vw]">
        <Routes>
          <Route path="/" element={<LayoutWithHeaderFooter><Home /></LayoutWithHeaderFooter>} />
          <Route path="/shop" element={<LayoutWithHeaderFooter><Shopping /></LayoutWithHeaderFooter>} />
          <Route path="/play" element={<LayoutWithHeaderFooter><Play /></LayoutWithHeaderFooter>} />
          <Route path="/product" element={<LayoutWithoutHeaderFooter><Details /></LayoutWithoutHeaderFooter>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
