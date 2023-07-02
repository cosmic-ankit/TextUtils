/*
********************* React Router ***********************

* Routing refers to the process of navigating between different pages or views in a web application like Home, About

* With React Router, you can define different routes for your application. Each route corresponds to a specific URL path and maps to a particular component that should be rendered when that path is accessed.

* For example, you can have a route for the home page, a route for a product listing page, and a route for a contact page. When a user enters a specific URL or clicks on their button(link), then that page will load without loading the page. The navigation bar will remain there same and the component tat we wanna change will change like from home pae with about page but the navigation bar  will remain there same. it wont refresh.

* Using React Router, you can create single-page applications (SPAs) where the page content changes dynamically without the need for full page refreshes. It allows you to build a smooth and interactive user experience by managing the different views of your application.

*    ***********    npm install react-router-dom ---> use this to indtall the react router.   ********

* ****************   import { BrowserRouter, Routes, Route } from 'react-router-dom';
Include it in app.js or index.js wherever u want to use it.

* We have to wrap all our code in <BrowserRouter>  </BrowserRouter>/ so some peple add them in app.js and some in index.js, include it wherever u wanna use it.

* In React we do client side rendering (NOT server side rendering )and router helps us to achieve that, the whole html css and javascript is provided to us by server and then javascript render the pages unlike server side rendering where we have to request the server again and again 

Example:-

<BrowserRouter>

<Navbar/>
<Alert/>

	<Routes>
		<Route path='Path You want to use' element={<What you want to render >}/> 
		// Example-->  <Route path="/about" element={<About />}></Route>	
	</Routes>

</BrowserRouter>


* To do rounting replace a with link in navbar and href with To

* Now the syntax is 
<Routes>

<Route path= element />
<Route path= element />



</Routes>

That it and rememmber that in routing we use "/" not"\".

Example:-
Routes>

<Route  path='/' element = {<Textform heading = "Write the text below" mode = {mode} showAlert={showAlert}/>}/>


<Route  path="about/*" element={<AboutUs />}/>


</Routes>



*/ 

// *********** Appp.js **********

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

// 

// **************** Navbar.js   *****************



import React from 'react';
import PropTypes from 'prop-types'; // First we have to import proptypes to use them
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <div>
      
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        {/* I am using JS here so that i can transfer the props using template literal. That's why writing in curly brackets and using backtick here */}

      
  <Link className="navbar-brand" to="/">{props.title}</Link> 
  {/* write them in a curly bracket */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">


    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">{props.home} <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="about/*">{props.about}</Link>
      </li>

        
    </ul>
   




</div>


  <div className={`form-check form-switch mx-3 text-${props.mode==="light"?"dark":"light"}`}>
  {/* text-light class do the text in white and text-dark in black */}

  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode</label>
  

  </div>
</nav>



    </div>
  )
}



Navbar.propTypes = {
    title : PropTypes.string,
    about : PropTypes.string, // It will accept only string as an argument, we can give other aeguments like number, array, objects etc as well and if the given argument wont satisfy the parameter it will throw error
    link: PropTypes.string.isRequired, // Now it is compulsary to pass it, if we  dont pass it will show error in console
}


// This prop will be gone defaultly if we dont overwrite it
Navbar.defaultProps = 
{
    home : "Home",
    about: "About",

}




