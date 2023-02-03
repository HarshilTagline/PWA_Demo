import { Alert, Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState("onLine");

  useEffect(() => {
    window.addEventListener("online", () => {
      setMode("onLine");
    });
    window.addEventListener("offline", () => {
      setMode("offLine");
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/PWA_Demo/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/PWA_Demo/users">Users</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/PWA_Demo/about">About</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {mode === "offLine" && <Alert variant={"warning"}>Warning! You are offline.</Alert>}
        <Routes>
          <Route exact path="/PWA_Demo/" element={<Home />} />
          <Route exact path="/PWA_Demo/users" element={<Users />} />
          <Route exact path="/PWA_Demo/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
