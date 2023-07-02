import  React from "react";
import { useState } from "react";


// Now here we will use state to chnage the colors of the elements while we click on the dark mode button


export default function AboutUs() {

  const toggleClick =() => {

    if (myStyle.color === "black") // Here we use tripple equal to '==='
    {
      btnText("Enable light mode");
      SetbtStyle({color: "white", backgroundColor: "grey", border:"1px solid white", borderradius:"4px", textDecoration:'none'});
      SetheaderStyle({color: "white", backgroundColor: "black" ,border:"1px solid white", borderradius:"4px"});
      SetmyStyle({color: "white", backgroundColor: "black", border:"1px solid white" ,borderradius:"4px",});

  }

  else {
    btnText("Enable dark mode");
      SetbtStyle({color: "black", backgroundColor: "grey", border:"1px solid black", borderradius:"4px", textDecoration:'none'});
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
    color:'white',
    backgroundColor:'grey',
    textDecoration : 'none',
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
      <button  type="button" className="btn btn-secondary" onClick={toggleClick}>{text}</button>
    </div>
    </div>

    </>

  );
}
