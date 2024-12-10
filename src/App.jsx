import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgcolor, setbgcolor] = useState("white");
  const changeBackgroundColor = (color) => {
    setbgcolor(color); // Update background color
  };

  return (
    <>
     <div  style={{width: '100%', minHeight: "100vh" ,backgroundColor: bgcolor}} className='d-flex justify-content-center align-items-center' >
      <h1 style={{textAlign:"center"}}>Click Button For Change Background Color</h1>
      
     
    <div  className='p-5 text-center' >
    <button  style={{ width:'70px',height:'30px',margin:'15px'}} onClick={() => changeBackgroundColor("blue")} className='btn btn-primary p-1  '>Blue</button>
    <button style={{ width:'70px',height:'30px',margin:'15px'}} onClick={() => changeBackgroundColor("green")} className='btn btn-success p-1 '>Green</button>
    <button style={{ width:'70px',height:'30px',margin:'15px'}} onClick={() => changeBackgroundColor("yellow")} className='btn btn-warning p-1'>Yellow</button>
    <button style={{ width:'70px',height:'30px',margin:'15px'}} onClick={() => changeBackgroundColor("red")} className='btn btn-danger p-1 '>Red</button>
    </div>
    </div>
    
    </>
  )
}

export default App
