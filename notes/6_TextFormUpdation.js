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


/***************** Notes *********************/
/*
* Here we have made another button to lowercase to change the text into lowercase.

*Then we have made a summary portion where we will show the no of characters are present and no of words are present with the help of text.length and text.split.length.

* Then we are calculating the no of time it will take to read the paragraph on the basis of no of words present

* mx-3 -> it is used to set the margin in x-asis.

* Now to change the color of botton in bootstrap use there respective class, u can google it anytime
Primary-Blue color
Success- Green color
Danger - Red color

* To change the theme of navbar, do the light->dark.
**/  