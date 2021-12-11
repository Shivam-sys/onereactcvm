// import logo from "./logo.svg";
import "./App.css";
import Copyright from "./components/Copyright";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
// FOR ROUTER PURPOSE IMPORT BELOEW
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const githubSiteName = "/onereactcvm"; //NOTICE: When running of localhost--> change this value to "";

let name = "Shivam Kumar";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
    mode === "light"
      ? showAlert("Dark Mode Set", "success")
      : showAlert("Light mode set", "success");
  };
  const [mode, setMode] = useState("light"); //wether darkmode enabled or not
  return (
    <>
      <div className="container-fluid display-5 bg-secondary text-light ">
        My First react app! EXICTED!!
      </div>
      <Alert alert={alert} />
      <div className="container">
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Routes>
            <Route
              exact
              // path={`${githubSiteName}/about`}
              path="/about"
              element={<About />}
            ></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Enter some text: "
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>

      <Copyright author={name} />
    </>
  );
}

export default App;
