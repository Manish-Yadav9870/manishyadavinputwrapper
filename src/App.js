
import './App.css';
import { useState } from 'react';


function App() {
  const [inputValue, setInputValue] = useState("")
  const [inputValue2, setInputValue2] = useState("")

  const _handleChange=(e,field)=>{
    const {value} = e.target
    field(value)
  }
  return (
    <div className="App">
      <h2>Input Swapper</h2>
    <div className='Child_Cont_input'>
  
      <div><input type='text' placeholder='Enter Your First Input' onChange={(e)=> _handleChange(e,setInputValue)} value={inputValue}></input></div>
      <div><input type='text' placeholder='Enter Your Second Input' onChange={(e) => _handleChange(e,setInputValue2)} value={inputValue2}></input></div>
    </div>
    <div className='Child_Cont_Btn'>
     <div> <button onClick={()=>{
       
        setInputValue2(inputValue)
        setInputValue("")
      }}>Move Your input2</button></div>
     <div> <button onClick={()=>{
        setInputValue(inputValue2)
        setInputValue2("")
      }}>Move Your Input1</button></div>
    </div>
    </div>
  );
}

export default App;
