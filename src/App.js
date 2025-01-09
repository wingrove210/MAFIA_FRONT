import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import Play from "./pages/Play";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedPage from "./pages/Protected";
import LayoutWithHeaderFooter from "./layouts/LayoutWithFooter";
import LayoutWithoutHeaderFooter from "./layouts/LayoutWithoutFooter";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <main className="h-auto w-[100vw]">
          <Routes>
            <Route
              path="/"
              element={
                <LayoutWithHeaderFooter>
                  <Home />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/shop"
              element={
                <LayoutWithHeaderFooter>
                  <Shopping />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/play"
              element={
                <LayoutWithHeaderFooter>
                  <Play />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/product"
              element={
                <LayoutWithoutHeaderFooter>
                  <Details />
                </LayoutWithoutHeaderFooter>
              }
            />
            <Route
              path="/login"
              element={
                <LayoutWithHeaderFooter>
                  <Login />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/register"
              element={
                <LayoutWithHeaderFooter>
                  <Register />
                </LayoutWithHeaderFooter>
              }
            />
            <Route
              path="/protected"
              element={
                <LayoutWithHeaderFooter>
                  <ProtectedPage />
                </LayoutWithHeaderFooter>
              }
            />
          </Routes>
        </main>
      </Router>
    </UserProvider>
  );
}

export default App;
