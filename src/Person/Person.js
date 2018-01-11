/**
 * Created by linh6_000 on 01/04/2018.
 */
import React from "react";

const person = (props) => {
    return (
        <div>
            <p> I'm a {props.name} and I'm {props.age} years old </p>
            <p> {props.children}</p>
        </div>)
};


export default person;