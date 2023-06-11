import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {
    const [alert, setAlert] = useState(null);
    // const [mode, setMode] = useState('light'); 
    // weather dark mode is enabled or not

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    
    const removeBodyClasses = ()=>{
        document.body.classList.remove('bg-light')
        document.body.classList.remove('bg-dark')
        document.body.classList.remove('bg-warning')
        document.body.classList.remove('bg-danger')
        document.body.classList.remove('bg-success')
        document.body.classList.remove('bg-light')
        document.body.classList.remove('bg-dark')
    }



    const toggleMode = (cls) => {
        removeBodyClasses();
        console.log(cls)
        document.body.classList.add('bg-'+cls)
        // if (mode === 'light') {
        //     setMode('dark');
        //     document.body.style.background = '#042743';
        //     showAlert("Dark mode has been enabled", "success");
        // }
        // else {
        //     setMode('light');
        //     document.body.style.background = 'white';
        //     showAlert("Light mode has been enabled", "success");
        // }mode={mode}
    }

    return (
        <>
            <Router>
                <Navbar title="TextUtils"  toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        {/* /users --> component 1
                            /users/home --> component 2 */}
                        <Route exact path="/" element={<About  />}> </Route>
                    </Routes>
                </div>
            </Router >
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"/>
        </>
    );
}

export default App;