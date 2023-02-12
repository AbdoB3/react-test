import React, { useState } from 'react'

export default function StateFun(){

    const[name,setName]=useState("")
    const[prenom,setPrenom]=useState("")
    const[message,setMessage]=useState("")

    let updatte=()=> setMessage(parseInt(name)+parseInt(prenom))
    return(
        <div>
            <h1>{message}</h1>
            <input onChange={(e)=>{setName(e.target.value)}} ></input>
            <input onChange={(e)=>{setPrenom(e.target.value)}} ></input>
            <button onClick={updatte}>Click to set message</button>

        </div>

    )
}