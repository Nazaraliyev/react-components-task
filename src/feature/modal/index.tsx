'use client';
import React from "react";
import Button from "../../components/button";
import '../../components/button/style.css'
import ModalContent from "../../components/modal-content";
import '../modal/style.css'
import '../../components/modal-content/style.css'
import {useState} from "react";


const MainSection = () => {

    const data = [
        {
            code: 1,
            name: 'name1'
        },
        {
            code: 2,
            name: 'name2'
        },
        {
            code: 3,
            name: 'name3'
        }
    ]
    const [show, setShow] = useState(false);
    const click = () => {
        setShow(!show)
    }
    return (
        <div className='main-div' style={{backgroundColor: show? '#8c8c8c' : '#fff' }}>
            <Button name='Modal' type='button' className='btn-style' onClick={click}/>
            <ModalContent text='test' className='modal-style' show={show} showModal={click} data={data}/>
        </div>
    )
}
export default MainSection