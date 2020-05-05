import React from "react";
import ReactDOM from "react-dom";
import "./styles";

function HelloWorld() {
    return (
        <span>Hello world</span>
    )
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
);