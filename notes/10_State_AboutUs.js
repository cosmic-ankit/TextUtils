// ********* AboutUs ************


/*

* Here we are gonna make the AboutUs Section for our webapp.

* Firstly we have added the accordian from the bootstrap in our app

* Then we have added the aboutus in our main app.js

* We have also create a button called "Enable Dark Mode " in the about us component.

* We can directly add inline css and can add the javascript object in it and then we can give css properties there. Here we use camelCase unlike css coz we are writing js here

* Here we can select any element in console and then its id will become $0, so instead writing its whole id and select it we can directly write ex:- 
$0.style.backgroundColor : 'Red;
and then it will show the changes in the chrome

* Here we have make the three objects myStyle, btnStle, headerStle and added them to their respective elements

* Here we have created a some state and give there values according them, when we click on the button the togglefunction executed and it changes the value of the object using the state.


*/


// ******************** AboutUs.js*******************

import  React from "react";
import { useState } from "react";


// Now here we will use state to chnage the colors of the elements while we click on the dark mode button


export default function AboutUs() {

  const toggleClick =() => {

    if (myStyle.color === "black") // Here we use tripple equal to '==='
    {
      btnText("Enable light mode");
      SetbtStyle({color: "white", backgroundColor: "blue", border:"1px solid white", borderradius:"4px"});
      SetheaderStyle({color: "white", backgroundColor: "black" ,border:"1px solid white", borderradius:"4px"});
      SetmyStyle({color: "white", backgroundColor: "black", border:"1px solid white" ,borderradius:"4px",});

  }

  else {
    btnText("Enable dark mode");
      SetbtStyle({color: "black", backgroundColor: "blue", border:"1px solid black", borderradius:"4px"});
      SetheaderStyle({color: "black", backgroundColor: "white" ,border:"1px solid black", borderradius:"4px"});
      SetmyStyle({color: "black", backgroundColor: "white", border:"1px solid black" , borderradius:"4px"});

  }


}


  const[text, btnText] = useState("Enable Dark Mode");


  const[myStyle,SetmyStyle] = useState(  {

    // Adding this in container and card body.
    color:'black',
    backgroundColor:'white', //Unlike CSS where we write it like background-color, here we use camelCase
  })

  const [btStyle,SetbtStyle] = useState({
    //Adding over the buttons in accordance
    color:'black',
    backgroundColor:'white',
  })

  const [ headerStyle,SetheaderStyle] = useState({
    color:'black',
    backgroundColor:'white', //Will add them in the card header
  })

  


// Here I am creating the object for buttons in accordian
  return (
<>
    <div className="container my-3" style = {myStyle}> {/* We can directly add the  inline CSS, here we are adding the myStyle object*/}
      <h1 className="container my-2 mx-2">About Us</h1>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne" style={headerStyle}/* Adding header style over here*/>
            <h5 className="mb-0">

              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={btStyle}
                //Adding the style for button over here
              >
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body" style={myStyle} /*Adding the style over here*/> 
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-le, raw denim aesthetic
              synth nesciunt you probably haven't heard of them accusamus labore
              sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo" style={headerStyle}/* Adding header style over here*/>
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={btStyle}
                //Adding the style for button over here
              >
                Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body" style={myStyle} /*Adding the style over here*/>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree" style={headerStyle}/* Adding header style over here*/>
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={btStyle}
                //Adding the style for button over here
              >
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body" style={myStyle} /*Adding the style over here*/>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    <div className="container my-2 mx-3">
      <button  type="button" className="btn btn-primary" onClick={toggleClick}>{text}</button>
    </div>
    </div>

    </>

  );
}
