import React from "react";

const cores = [
    <p>Red</p>,
    <p>Orange </p>,
    <p>Yelow </p>,
    <p>Green </p>,
    <p>Blue </p>,
    <p>Indigo </p>,
    <p>Violet</p>,
]

export default function Cores (){
    return (
        <div className="cores_group">
            {[cores]}
        </div>
    )
}

