import React, { useState } from 'react'
import './Counter.css';

const Counter = () => {

  let [count, changeCount] = useState(0)

  return (
    <div className="localeBody">
      <h1>C O U N T E R</h1>
      <h1 id="countNumber">{count}</h1>
      <div className="buttonEncloser">
        <button className="button" id="inc" onClick={(prevCount) => changeCount(prevCount + 1)}>
          Increase
        </button>
        <button className="button" id="dec" onClick={(prevCount) => changeCount(prevCount - 1)}>
          Decrease
        </button>
      </div>
      <button className="button" id="reset" onClick={() => changeCount(count = 0)}>
        Reset
      </button>
    </div>
  )
}

export default Counter
