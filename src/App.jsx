import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Newsboard from './components/newsboard';
import { useState } from 'react';
function App() {
const [categeory , setcategeory]=useState("general")

  return(
    <>
    <Navbar setcategeory={setcategeory}></Navbar>
    <Newsboard categeory={categeory}></Newsboard>
   
    
    
    </>
  )
  
}

export default App
