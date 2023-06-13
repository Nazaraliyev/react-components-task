import React from "react";
interface ButtonInterface{
    type? :string,
    name?:string,
    className?:string,
    onClick?: (e:React.MouseEvent<HTMLElement>) =>void
}
export default ButtonInterface;