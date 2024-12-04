import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
function App() {
  return (
   <>
   <Navbar tittle= "TextUtils"/>
   <div className= "container my-3">
   {/* <TextForm heading={<strong>ENTER THE TEXT TO ANALYZE BELOW:-</strong>} /> */}
   <About/>
   </div>
   </>
  );
}

export default App;
