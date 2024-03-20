import './App.css';
import {useEffect, useState} from 'react';

function App() {
  /* //////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  USE STATES /////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

const [name , setName] = useState('username')

const profile = {
  fullname:"Othmane Merzak",
  bio:"This is my Bio",
  imgsrc:"image source",
  profession:"This is my profession"
}

const [show, setShow] = useState(false);

function toggle () {
  setShow (show => !show);
}

useEffect(() => {
  setName(profile)
}, []);




console.log(profile);
  
  /* //////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  RETURN SECTION /////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is your Profile:</h1>
        {show && profile.bio}
        <br/>
        {show && profile.fullname} 
        <br/>
        {show && profile.profession} 
        <br/>
        {show && profile.imgsrc}
        <br/>
       <button onClick={toggle}>CLICK ME</button>
      </header>
    </div>
  );
}

export default App;
