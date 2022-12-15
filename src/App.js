import { Alert, Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Link, HashRouter } from "react-router-dom";
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
      <HashRouter>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/users">Users</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {mode === "offLine" && <Alert variant={"warning"}>Warning! You are offline.</Alert>}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
