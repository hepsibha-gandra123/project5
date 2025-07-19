import React from 'react'
 export default function State(){
    const [count,setCount]=React.useState(0)
     function add(){
        setCount(count+1)
     }
     function subtract(){
        setCount(count-1)
     }
     return(
         <main className="container">
             <h1>
                 Counting Clicks
             </h1>
             <div className="counter">
                 <button className="minus" onClick={subtract} aria-label="decrease count">
                     -
                 </button>
                 <h2 className="count">{count}</h2>
                 <button className="plus" onClick={add} aria-label="increase count">
                     +
                 </button>
             </div>
         </main>
         )
 }

