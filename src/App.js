import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import Shopping from "./Shopping";
import Play from "./Play";
import Details from "./Details";// Страница с деталями товара
import Header from "./Header";
import Footer from "./Footer";
import LayoutWithHeaderFooter from "./layouts/LayoutWithFooter";

function App() {

  return (
    <Router>
      <main className="h-auto w-[100vw]">
        <Routes>
          <Route path="/" element={<LayoutWithHeaderFooter><Home /></LayoutWithHeaderFooter>} />
          <Route path="/shop" element={<Shopping />} />
          <Route path="/play" element={<Play />} />
          <Route path="/product/:id" element={<Details />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
