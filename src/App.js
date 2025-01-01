import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Function to set alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000); // After 3 seconds, remove the alert message
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success');
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" home="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* No routes now, just display the TextForm component */}
        <TextForm heading="Enter Text To Analyze Below" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;







// import React, { useState } from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import About from './components/About';  // Import About component for about page link
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   // Function to set alert message
//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     })
//     setTimeout(() => {
//       setAlert(null);
//     }, 3000); // After 3 seconds, remove the alert message
//   }

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert('Dark Mode Enabled', 'success');
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert('Light Mode Enabled', 'success');
//     }
//   };

//   return (
//     <>
    
//         <Navbar title="TextUtils" aboutText="About" home="Home" mode={mode} toggleMode={toggleMode} />
//         <Alert alert={alert} />
//         <div className="container my-3">
//           <TextForm heading="Enter Text To Analyze Below" mode={mode} showAlert={showAlert} />
//     </div>
//   );
// }

// export default App;




