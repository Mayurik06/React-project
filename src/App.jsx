import { useState } from "react";
import Navabar from "./components/Navabar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // setInterval(showAlert('Dark mode is enable','success'),2000)
      showAlert("Dark mode is enable", "success");
      console.log(alert);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enable", "success");
      console.log(alert);
    }
  };

  return (
    <>
       <Router>
      <Navabar
        title="Blog"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      ></Navabar>
      <Alert alert={alert} />
      <div className="container my-3">
     
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm mode={mode} />} />
          </Routes>
    
      </div>
      </Router>
    </>
  );
}

export default App;
