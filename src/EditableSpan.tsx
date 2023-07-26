import React, {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";

type EditableSpanPropsTypes = {
    title: string
    callback:(title:string)=>void
}
export const EditableSpan = (props: EditableSpanPropsTypes) => {
    let [title, setTitle] = useState('')
    let [editMode, setEditMode] = useState(false)
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const editModeOn = () => {
        setEditMode(true)
    }
    const editModeOff = () => {
        setEditMode(false)
        props.callback(title)
    }
    return (

        (editMode) ?
            <TextField
                id="standard-basic"
                label="Input title"
                variant="standard"
                onChange={onChangeTitleHandler}
                value={title} onBlur={editModeOff}
                autoFocus></TextField>
            : <span onDoubleClick={editModeOn}>{props.title}</span>

    )
}