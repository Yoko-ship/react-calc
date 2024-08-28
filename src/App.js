import './App.css';
import ButtonShow from './componets/button';
import { useState } from 'react';


function App(props) {
  const [inputValue,setInputValue] = useState("")
  
  const [lastKey, setKey] = useState("")
  function handleInput(value){
    setInputValue(prevValue => prevValue + value);
  }
  const taskList = props.tasks?.map((task) => (
    <ButtonShow className={task.className} name={task.name} handleInput={handleInput}/>
  ))
  
  function keyHandler(event){
    if(event.key === "Enter"){
      setKey(event.key)
    }
  }


  if(inputValue.includes("=") || lastKey){
    if(inputValue.includes("+")){
      var [a,b] = inputValue.replace("=","").split("+")
      var numA = Number(a)
      var numB = Number(b)
      console.log(a,b)
      if(!isNaN(numA) || !isNaN(numB)){
        const result = numA + numB
        setInputValue(result.toString())
      }else{
        setInputValue("Введите число")
      }
    }
    else if(inputValue.includes("*")){
      var [a,b] = inputValue.replace("=","").split("*")
      var numA = Number(a)
      var numB = Number(b)
      console.log(a,b)
      if(!isNaN(numA) || !isNaN(numB)){
        const result = numA * numB
        setInputValue(result.toString())
      }else{
        setInputValue("Введите число")
      }
    }
    else if(inputValue.includes("/")){
      var [a,b] = inputValue.replace("=","").split("/")
      var numA = Number(a)
      var numB = Number(b)
      console.log(a,b)
      if(!isNaN(numA) || !isNaN(numB)){
        const result = numA / numB
        setInputValue(result.toString())
      }else{
        setInputValue("Введите число")
      }
    }
    else if(inputValue.includes("-")){
      var [a,b] = inputValue.replace("=","").split("-")
      var numA = Number(a)
      var numB = Number(b)
      console.log(a,b)
      if(!isNaN(numA) || !isNaN(numB)){
        const result = numA - numB
        setInputValue(result.toString())
      }else{
        setInputValue("Введите число")
      }
    }
    
  }
  if(inputValue.includes("Clear")){
    setInputValue("")
  }

  if(inputValue.includes("del")){
    var prevValue = inputValue.replace("del","").slice(0,-1)
    setInputValue(prevValue)
  }


  return (
    <header> 
    <div className='border'>
      <span>Made by Yoko</span>
    </div>
      <div className='papa'>
      <div className="container">
        <h1>Online Calculator</h1>
        <div className='input'>
          <input type='text' placeholder='Введите число' onChange={(e) => setInputValue(e.target.value)} value={inputValue} onKeyDown={keyHandler}></input>
        </div>
        <div className='grids'>{taskList}</div>
      </div>
    </div>
    </header>
  

  );
}

export default App;
