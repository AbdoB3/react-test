import React, {useState} from "react";
import Nave from "./Nav";

function Conteur(){
    const[nombre,setNombre]=useState(0)


    return(
        <div>
            <h1>{nombre}</h1>
            <button onClick={()=>{setNombre(nombre+1)}}>Incrementer</button>
        </div>
    )
}

export default Conteur