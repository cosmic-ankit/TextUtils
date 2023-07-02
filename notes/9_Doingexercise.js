// Adding Cler button and Morse Code button

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


  // adding event in the argment, event that happen
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
      <div className=  "container mb-3">
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
        <p>{text}</p> 
        {/* Prewing the text here */}


        <div className="container"></div>

      </div>

    </div>
  );
}
