
import React from "react";
import SocialItem from "./componentts/socialItem";
import Card from "./componentts/card";
import info from "./componentts/info";
import States from "./classComponents/state";
import StateFun from "./componentts/hooks";
import Conteur from "./componentts/conteurState";
import Product from "./componentts/product";
import Form from "./classComponents/form";

import 'bootstrap/dist/css/bootstrap.min.css';
import Nave2 from "./componentts/Nav2";
import {BrowserRouter} from 'react-router-dom'
import Routing from "./Routingt";


function App() {

  const members=info.map (member =>
     <Card
        key={member.id}
        img={member.img} 
        name={member.name}
        post={member.post}
        phone={member.phone}
        email={member.email}
        website={member.website}
    />
          
);

  return (
    <>
    <Routing/>
   


      {/*<div className="container mt-3">


      <BrowserRouter >
        <Nave/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<Form/>}></Route>
          <Route path='/conteur' element={<Conteur/>}></Route>
        </Routes>
    </BrowserRouter>
        


       {/* <Nave2/>


        <ul className="list-group">
          <SocialItem img='https://picsum.photos/60' id='facebook' socialName='Facebook'/>
          <SocialItem img='https://picsum.photos/61' id='instagram' socialName='Instagram'/>
          <SocialItem img='https://picsum.photos/62' id='youtube' socialName='Youtube'/>
          <SocialItem img='https://picsum.photos/68' id='snapchat' socialName='Snapchat'/>

        </ul>

        <hr/>

        <div className="row mt-3">
          {/*members

        </div>
        
        <hr/>

        <StateFun/>
        <Conteur/>
        
        <hr/>

        <Product />
        <hr/>


        <Form/>

        <hr/>

      </div>*/}
       </>
    
  );
}

export default App;
