import React from "react";
import ButtonInterface from "./type";
const Button :React.FC<ButtonInterface> = (props) => {
    return (
        <button type={props.type}  className={props.className} onClick={props.onClick} style={props.style}>{props.name}</button>
    )
}
export default Button;
