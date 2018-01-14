/**
 * Created by linh6_000 on 01/04/2018.
 */
import React from "react";
import "./Person.css";

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> I'm a {props.name} and I'm {props.age} years old </p>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>)
};


export default person;