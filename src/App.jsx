import { useState } from "react"
import Button from "./components/Button";

function App() {

  const [count, setCount] = useState(5);

  // setCount(10);


  return (
    <>
      <div className="counter-container">
        <div className="counter-card">
          <div className="counter-display">
            <span className="counter-number">
              {count}
            </span>
          </div>
          
          <div className="counter-controls">
            <button 
                className="counter-btn decrement" 
                onClick={()=>setCount(count-1)}
                >
              -
            </button>
            <Button label="-" onClick={()=>setCount(count-1)}  />
            <button 
              className="counter-btn increment"
              onClick={()=>setCount(count+1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
