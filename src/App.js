
import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);
  //couner -state - to hold values

function incrementCounter() {
  setCounter(counter+1);
}
function decrementCounter() {
  if(counter<=0){
    setCounter(0);
  }else{
  setCounter(counter-1);
}
}
function resetCounter() {
  setCounter(0);
}
  return (
    <div style={{ display:'flex',justifyContent:"center"}} className="App">
      <div style={{borderRadius:'20px',textAlign:'center',backgroundColor:'#565d5e' ,width:'50%', display:'flex',justifyContent:"center"}}>
      <header className="App-header">
       <h3>Counter Application</h3>
       <h2>{counter}</h2>
       <button style={{borderRadius:"6px",marginRight:'8px',backgroundColor:'#b3ffb3'}} onClick={incrementCounter}>INCREASE +</button>

       <button style={{borderRadius:'6px',backgroundColor:'#ffb3ec'}} onClick={decrementCounter}>DECREASE -</button> <br></br>
       <button style={{borderRadius:'6px',marginTop:"5px",color:'red'}} onClick={resetCounter}>Reset</button>
      

      </header>
        </div>
      
    </div>
  );
}

export default App;
