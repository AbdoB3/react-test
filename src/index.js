import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Form from "./classComponents/form";
import Conteur from './componentts/conteurState';
import Home from './componentts/Home';
import Nave from './componentts/Nav';


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='container mt-3'>
    <App/>

    </div>
)