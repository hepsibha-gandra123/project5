import React from 'react'
 export default function State(){
    const [IsImportant,setIsImportant] = React.useState("yes")
     function HandleClick(){
        setIsImportant("heck yes")
     }
     return(
         <main>
             <h1 className="title">Is State Is Important?</h1>
             <button onClick={HandleClick} className="button">{IsImportant}</button>
         </main>
     )
 }

