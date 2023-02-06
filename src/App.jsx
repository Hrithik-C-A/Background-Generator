import React from 'react'
import './App.css'

function App() {
 
  const changeBackground = ()=>{
    let body = document.querySelector('body');
    body.style.background = "linear-gradient(to right, "+randomColor()+","+randomColor();")";
    
  }
  const changeBackgroundInput = ()=>{
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let body = document.querySelector('body');
    body.style.background = "linear-gradient(to right, "+input1+","+input2;")";
  }

  function randomColor(){
    let letters = "0123456789ABCDEF";
    let color="#"
    for(let i=0;i<6;i++){
      color+=letters[Math.floor(Math.random()*16)]
    }
    return color
  }
  return (
    <>
    <div>
    <input type="color" id='input1' onChange={changeBackgroundInput}/>
    <input type="color" id='input2' onChange={changeBackgroundInput}/>
    <button style={{height:"2rem",width:"8rem",borderRadius:"8px",position:"absolute",top:"55%"}} onClick={changeBackground}>Random Color</button>
    </div>
    </>
  )
}

export default App
