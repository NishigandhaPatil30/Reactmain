import React, { useState } from 'react'
function Home() {
    const [count,setCount]=useState(0)
    function increament(){
        setCount(count+1)
    }
    function decreament(){
        setCount(count-1)
    }
  return (
    <div>
      <button onClick={increament}>+</button>{count}
      <button onClick={decreament}>-</button>
    </div>
  )
}
export default Home
