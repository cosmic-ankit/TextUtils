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




