import './App.css';
import { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import naam from './moon'
// import { a, b, c } from './moon'
import Alert from './components/Alert';

function App() {
  // console.log(naam);
  // console.log(a, b, c);


  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove("bg-light")
  //   document.body.classList.remove("bg-dark")
  //   document.body.classList.remove("bg-primary")
  //   document.body.classList.remove("bg-danger")
  //   document.body.classList.remove("bg-success")
  //   document.body.classList.remove("bg-warning")
  // }

  const toggleMode = (cls) => {

    // removeBodyClasses();
    // document.body.classList.add("bg-"+cls)


    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
      // document.title = ("TextUtils - Dark Mode");
      // FLASH TITLE
      // setInterval(() => {
      // document.title = ("TextUtils is Amazing");   
      // }, 2000);
      // setInterval(() => {
      //   document.title = ("Install TextUtils Now");   
      //   }, 1500);
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      // document.title = ("TextUtils - light Mode");
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} aboutText="About TextUtils" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>

            <Route exact path="/about"  element={<About mode={mode} />}  />
            <Route exact path="/" element={ <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" showAlert={showAlert} mode={mode} />}/>
       
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
