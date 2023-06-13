import React from "react";
import ModalInterface from "./type";
import Button from "../button";
import '../button/style.css'
const ModalContent: React.FC<ModalInterface> = (props) => {
return(
    <div className={props.className}  style={{display : props.show ? 'block' :'none'}}>
        <Button name='&times;' onClick={props.showModal} className='close-btn' style={{float:"right"}}/>
        <br/>
        {props.data.map( data => <p key={data.code} style={{padding:"10px"}}>{data.name}</p>)}
    </div>
)
}
export default ModalContent