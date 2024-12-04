import './App.css';
import Navbar from './components/Navbar';
// import TextForm2 from '../../TextForm2';
import TextForm from './components/TextForm';
function App() {
  return (
   <>
   <Navbar tittle= "TextUtils"/>
   <div className= "container my-3">

   <TextForm heading="Enter the text to analyze below"/>
   </div>
   </>
  );
}

export default App;
