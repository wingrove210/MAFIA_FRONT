import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import Play from "./pages/Play";
import Details from "./pages/Details";
import Login from "./pages/Login";
import CartPage from "./pages/Cart";
import Register from "./pages/Register";
import ProtectedPage from "./pages/Protected";
import BillboardDetails from "./pages/BillboardDetails";
import LayoutWithHeaderFooter from "./layouts/LayoutWithFooter";
import LayoutWithoutHeaderFooter from "./layouts/LayoutWithoutFooter";
import { UserProvider } from "./contexts/UserContext";
import Preloader from "./components/Preloader";
import AfterLoader from "./components/AfterLoader";
import Loading from "./components/Loading";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Эмулируем загрузку данных, используя setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Установите время загрузки в миллисекундах

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // return <Preloader />;
    return <Loading/>
  }

  return (
    <UserProvider>
      <Router>
        <main className="h-auto w-[100vw]">
          <Routes>
            {/* <Route
              path="/"
              element={
                <Preloader/>
              }
            /> */}
            <Route path="/animation" element={<AfterLoader/>}/>
            <Route
            path="/"
            element={
              <LayoutWithHeaderFooter>
                  <Home/>
              </LayoutWithHeaderFooter>
            }
              >
              </Route>
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
              path="/product/:id"
              element={
                <LayoutWithoutHeaderFooter>
                  <Details />
                </LayoutWithoutHeaderFooter>
              }
            />
            <Route
              path="/billboards/:id"
              element={
                <LayoutWithoutHeaderFooter>
                  <BillboardDetails />
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
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </Router>
    </UserProvider>
  );
}

export default App;
