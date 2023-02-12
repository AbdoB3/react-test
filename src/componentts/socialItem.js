import React from 'react';


export default function SocialItem(props){
    
    return(
        <div className="col-6">
            <li className="list-group-item">
                <img src={props.img} alt={`icon for ${props.id}`} />
                <input  type="checkbox" id={props.id}/>
                <label htmlFor={props.id}>{props.socialName}</label>
            </li>
        </div>
    )
}