import React from 'react';
import './ButtonComp.module.css';
import {Button} from "@mui/material";

type ButtonProps = {
    name: string
    callBack: () => void
    className: string
}


export const ButtonComp = (props: ButtonProps) => {
    const onClickHandler = () => {
        props.callBack()
    }
    console.log(props.className)
    return (
        <Button className={props.className} onClick={onClickHandler}>{props.name}</Button>
    )
}