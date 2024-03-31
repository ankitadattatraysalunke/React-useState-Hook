import React, { useState } from 'react'
// function countInit(){
//     console.log('constructor')
//         return 0;
// }

function Test() {
    
    // const [count, setCount] = useState(countInit(0))
    // const [name, setName] = useState('increment'); 
    const [state , setState] = useState({count:0, name:'Incerement'})
    const count = state.count
    const name = state.name
    function increment(){ 
        setState(prevState=>{
            return {...prevState,name:'Increment', count:prevState.count+1}
        })
        // setCount( prevCount=>prevCount+1) 
    }

    function decrement(){
        // setCount( prevCount=>prevCount-1)
        setState(prevState=>{
            return {...prevState,name:'Decrement', count:prevState.count+1}
        })
    }
  return (
    <div>
        {name} <br/>
        <button onClick={increment}>+</button>{count}<button onClick={decrement}>-</button>
    </div>
  )
}

export default Test;
