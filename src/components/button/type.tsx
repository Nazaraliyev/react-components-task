import React from "react";
interface ButtonInterface{
    type? :string,
    name?:string,
    className?:string,
    style?:string,
    onClick?: (e:React.MouseEvent<HTMLElement>) =>void
}
export default ButtonInterface;