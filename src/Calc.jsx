import { useState } from 'react'
function Count(){
const [count,setcount]=useState(0)
const handleclick=()=>{
    setcount(count+1)
}
const handleclick1=()=>{
    setcount(count-1)
}
const RESET=()=>{
    setcount(0)
}
return(<div className='container'>
    <h1 className='count'>{count}</h1>
    <div className='button-group'>
      <button onClick={handleclick} className='btn'>+</button>
      <button onClick={handleclick1} className='btn'>-</button>
      <button onClick={RESET} className='btn'>Reset</button>
    </div>
</div>)

}export default Count
