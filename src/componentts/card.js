import React from "react";


export default function Card(props){

    return(
        <div className="col-4 mb-3">
            <div className="card" >
                <div className="card-header">
                    <img src={props.img} className="card-img-top" alt='..' />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">job: {props.post}</li>
                        <li className="list-group-item">phone: {props.phone}</li>
                        <li className="list-group-item">email: {props.email}</li>
                        <li className="list-group-item">website: {props.website}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}