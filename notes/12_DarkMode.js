/*
**************** Enabling dark Mode in Navbar*********

* So what we are doing here is we have craeted a toggle switch in navbar usibg bootstrap.

* Now we have created  a state here that will set the mode in our navbar, by default it is light and SetMode is used to change that default mode.

* Now we are passing this state in anvbar using props, and setting it up in the class of navbar to change its mode, whenever the dark will pass it will change to the dark mode and whenever the light will it will change to the light mode.

* So what 's happening is we have also created a toggle function which we are passing through props, on clicking this toggle button the toggleMode function get activated and if the mode is dark its set the mode to light and vice versa then this mode pass get updated in class of navbar and the class of toggle button to appear the text n white or black.

* We have use ternary operator to set the text color in toggle buttion, ? means then and : means else. So if mode is dark set it to light and vice versa.

* To change the background color of the body element we have used document.body.style.background in toogleMode

* Now we want to chnage the background color of text area and the texts color of heading as we switcht the mode so we will pass the moode respectovely and then change the background color using the ternary operator

* So what we are doing now is that we have chnage the color of the body according the mode

* Now we also want the text colr and the bg of textarea change according the mode so we have transfer the props of mode ther and changed the color of text and bg color according to the mode.

*/

// ********************** App.js **************
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';  // This will automatically imported once we write navbar in jsx
import Textform from './Components/Textform';
import { useState } from 'react'; 





function App() {
  
  
  const[mode,SetMode]= useState("light"); // Setting up mode here with the help of useState

  const[alert,setAlert]=useState(null); // We will pass alert as an object

  const showAlert = (message,type)=>{
    
  }

  const toggleMode =()=>{
    if(mode==="light")
    {
      SetMode("dark");
      document.body.style.backgroundColor="black"; // To change the background color of body elements
      setAlert("Dark Mode has been enabled");
      
    }
    else {
      SetMode("light");
      document.body.style.backgroundColor="white";
      setAlert("Light Mode has been enabled");
    }
  }

  // Now here we are declaring a function here that we will pass through props
 



  return (
    
<div>
      


<Navbar title="TextUtils" about = "Options" mode={ mode } toggleMode ={toggleMode}  />  {/* To import component we use this syntax = <navbar/> */}
{/* Here we are also passing the function so that we can use that function over navbar */}

<div className="container  my-3" > 
       {/* ".container" is a claass which automatically put the content inside it in centre  */}
       {/* my-3 is a bootstrap class that give margin y = 3 etc */}
      

<Textform heading = "Write the text below" mode = {mode}/>

{/* <AboutUs/> */}


</div>
  
</div>


    
  );
}

// export default App;

// *************** Navbar.js *******************************

import React from 'react'
import {useStae} from 'react'
import PropTypes from 'prop-types' // First we have to import proptypes to use them



export default function Navbar(props) {
  return (
    <div>
      
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        {/* I am using JS here so that i can transfer the props using template literal. That's why writing in curly brackets and using backtick here */}

      
  <a className="navbar-brand" href="\">{props.title}</a> 
  {/* write them in a curly bracket */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">


    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="\">{props.home} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="\">{props.link}</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="\" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {props.about}          {/* Adding props here */}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="\">Action</a>
          <a className="dropdown-item" href="\">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="\">Something else here</a>
        </div>
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
    link: "Link",

}





// ********************** TextForm.js ********************

import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const [text, setText] = useState("Input Text"); 

  const Uppercase = ()=> {

    console.log(" Converting the text into uppercase");

    let upText = text.toUpperCase(); // Converting to text into upperText and storing into new variable

    setText(upText); // Setting that variable to text and text will set the value in text area


  }


  // adding event in the argument, event that happen
  const ChangingText = (event)=> 
  {
    console.log("Changing text");
    setText(event.target.value); // This will add the written text ahead of already present value

  }

  const Lowercase = ()=> // Converting to LowerCase
  {
    console.log("Lowercase");
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const Clear = ()=> {

    setText("");

  }


  // Creating a map for Morse Code
  const morseCodeMapping = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    ',':" ",
    '.':" ",
    

  };
  
  const MorseCode = ()=>{

    let textToConvert = text.toUpperCase();
    let MorseCodeText = "";
    
    for (let i = 0; i < textToConvert.length; i++) {
      let character = textToConvert[i];

      
      if(character == " ") 
      {
        MorseCodeText += " ";
      }
      else if (morseCodeMapping.hasOwnProperty(character)) 
      {
        MorseCodeText += morseCodeMapping[character] + " "; 
      }
      else 
      {
        MorseCodeText = " Invalid character ";
        break;
      }
      
    }

    setText(MorseCodeText);
    

  }
  



  return (
    <div>
      {/* Adding form from bootstrap. Class-> ClassName, for-> htmlFor*/}
      <div className=  "container mb-3" style= {{color: props.mode==="dark"?"white":"black"}}>
        {/* So here we are changing the color of texts of this container according the mode */}
        {/* Here we are chaning the color of the elements in the container according the mode */}
        <label htmlFor="myText" className="form-label">
          <h1>{props.heading}</h1>
          {/* taking heading as props */}
        </label>

        <textarea
          className="form-control"
          value={text}
          id="myText" // Id should be written in label
          rows="7" // We can change the size of textarea through rows
          onChange={ChangingText} // On change is an event that will be executed
          style = {{backgroundColor: props.mode==="light" ? "white" : "#cbced3", border: "2px solid black", color: props.mode==="dark"?"#4c4646":"black"}}
          // Here we are changing the background color of the textarea by using props
        ></textarea>

        
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={Uppercase}> Change to Uppercase</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={Lowercase}> Change to Lowercase</button>
        {/* Creating a lowercase button here. Mx is used to set the margin in x axis */}
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={MorseCode}> Convert to Morse Code</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={Clear}> Clear</button>
      

        {/* Adding onClick event */}

        <h2>Your Text Summary</h2>
        <p>
          <strong>{text.length}</strong> Characters and <strong>{text.split(" ").length}</strong> Words
          {/* Text Length gives the length of texts ie charcters. Text.split returns an array which have words in its indexes. Its .length function will give no of words */}
        </p>
        <p>
          <strong>{0.007 * text.split(" ").length}</strong> Minutes read
          {/* It takes 0.007 minute to read one word */}
        </p>

        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Write something to preview here"}</p> 
        {/* Prewing the text here */}


        <div className="container"></div>

      </div>

    </div>
  );
}






