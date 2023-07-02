// import logo from './logo.svg';
import { useState } from 'react'; 
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';  // This will automatically imported once we write navbar in jsx
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  
  
  const[mode,SetMode]= useState("light"); // Setting up mode here with the help of useState
  const[alert,SetAlert] = useState(null);

  const showAlert = (message, type) => {
    SetAlert({
      msg:message,
      typeOfAlert:type

    })

    setTimeout(()=>{
      SetAlert(null); 
    },1700)
  }


  

  

  const toggleMode =()=>{
    if(mode==="light")
    {
      SetMode("dark");
      document.body.style.backgroundColor="black"; // To change the background color of body elements
      showAlert("Dark Mode is enabled", "success")
      document.title="TextUtils-Dark";
      
    }
    else {
      SetMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is enabled", "success")
      document.title="TextUtils-Light";
    }
  }

  // Now here we are declaring a function here that we will pass through props
 



  return (
    
<div>
    <BrowserRouter>


<Navbar title="TextUtils"  mode={ mode } toggleMode ={toggleMode}  />  {/* To import component we use this syntax = <navbar/> */}
{/* Here we are also passing the function so that we can use that function over navbar */}

<Alert alert={alert}/>


<div className="container  my-3" > 
<Routes>

       {/* ".container" is a claass which automatically put the content inside it in centre  */}
       {/* my-3 is a bootstrap class that give margin y = 3 etc */}
<Route  path='/' element = {<Textform heading = "Write the text below" mode = {mode} showAlert={showAlert}/>}/>


<Route  path="about/*" element={<AboutUs />}/>

{/* <Textform heading = "Write the text below" mode = {mode} showAlert={showAlert}/> */}
{/* <AboutUs /> */}



</Routes>
</div>
  
</BrowserRouter>
</div>


    
  );
}

export default App;

