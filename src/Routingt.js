import React from "react";
import Home from "./componentts/Home";
import Form from "./classComponents/form";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Conteur from "./componentts/conteurState";
import Nave from "./componentts/Nav";


export default function Routing(){
    return(
        <BrowserRouter >
            <Nave/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route  path='/contact' element={<Form/>}></Route>
                <Route path='/conteur' element={<Conteur/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}