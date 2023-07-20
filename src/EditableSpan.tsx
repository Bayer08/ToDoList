import React, {ChangeEvent, useState} from "react";

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
            <input onChange={onChangeTitleHandler} value={title} onBlur={editModeOff} autoFocus></input>
            : <span onDoubleClick={editModeOn}>{props.title}</span>

    )
}