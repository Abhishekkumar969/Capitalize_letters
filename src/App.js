import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
// } from "react-router-dom";


function App() {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const [mode, setMode] = useState('light'); // weather dark mode is enabled or not
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.background = '#042743';
            showAlert("Dark mode has been enabled", "success");
            document.title = 'TextUtils - Dark Mode';
            // setInterval(() => {
            //     document.title = 'TextUtils installed';
            // }, 2000);
            // setInterval(() => {
            //     document.title = 'Install TextUtils';
            // }, 1500);
        }
        else {
            setMode('light');
            document.body.style.background = 'white';
            showAlert("Light mode has been enabled", "success");
            document.title = 'TextUtils - Light Mode';
        }
    }

    return (
        <>
            {/* <Router> */}
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                   {/* <Routes> */}
                        {/* /users --> component 1
                            /users/home --> component 2 */}
                        {/* <Route exact path="/" element={<About />}> </Route>  */}
                        {/*<Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>*/}
                        {/* <Route exact path="/">
                        </Route>*/}
                  {/*  </Routes> */}
                     <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> 
                </div>
            {/* </Router > */}
        </>
    );
}

export default App;