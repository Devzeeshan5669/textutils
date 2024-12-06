import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const[Mode, setMode] = useState('light');

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';

    }
};
  return (
   <>
   {/* <Navbar tittle= "TextUtils"/> */}
   <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
   <div className= "container my-3">
   <TextForm heading="ENTER THE TEXT TO ANALYZE BELOW:-" mode={Mode}/>
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;
