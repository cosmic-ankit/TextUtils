// ************ Creating Text Area *************

/*

* Creating new component of text form, using bootstrap 
* Name of label and id should be same

In App. Js

* adding textform in div.container. Its a bootstrap class that put the content in the mid.
* By = 3 adds the margin in y.
* Rows = 8, will increase the size of text area


*/ 


// ************* State *************
/*

* State is used to manage and hold data that is specific to a component. It represents the current condition or values of the component and can be changed over time. State is mutable, meaning it can be updated using the setState method.

* Use State is a hook that helps us to use state, previously when we used to have class based components we can use the various features directly. Now we can directly use these fectures of class using hooks.

* const(text,SetText) = usestate("Default value");
Always include this function inside the rfc.

* Here text is like a variable which hold the default value we can use this text anywhere and the value given to it will be displaued.

* We can change the value of text state by using SetText function. We cant directly change its value like text="Ok"->Wrong.

* To use set write "{SetName}""



*/ 


// ******* Creating Upperase button *********

/*
* Making to events onClick when we will click the button.

* OnChange when we will change the text inside the textarea. We have already set it to text so without adding this function there will  be no change. We will add SetText(event.target.value) to change the text.

*/ 

// ******************* App.js ****************

// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';  // This will automatically imported once we write navbar in jsx
import Textform from './Components/Textform';




function App() {
  return (
   
<div>
      


<Navbar title="TextUtils" about = "Options"   />  {/* To import component we use this syntax = <navbar/> */}


<div className="container  my-3"> 
       {/* ".container" is a claass which automatically put the content inside it in centre  */}
       {/* my-3 is a bootstrap class that give margin y = 3 etc */}
      

<Textform heading = "Write the text below"/>


</div>
  
</div>


    
  );
}

export default App;

