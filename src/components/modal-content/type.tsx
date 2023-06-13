import React from "react";

interface ModalInterface {
    text?: string,
    className?: string,
    show: boolean,
    data:any[],
    showModal?:(e:React.MouseEvent<HTMLElement>) =>void
}

export default ModalInterface;