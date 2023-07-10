import React from 'react';
import './Button.module.css';

type ButtonProps = {
    name: string
    callBack: () => void
    className: string
}


export const Button = (props: ButtonProps) => {
    const onClickHandler = () => {
        props.callBack()
    }
    console.log(props.className)
    return (
        <button className={props.className} onClick={onClickHandler}>{props.name}</button>
    )
}