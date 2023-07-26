import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@mui/material";
import ControlPointIcon from '@mui/icons-material/ControlPoint'

type InputForm = {
    addNewItem: (title: string) => void
}
export const InputForm = (props: InputForm) => {

    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(e.currentTarget.value)
        console.log('Error === 0')
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTaskHandler()
        }
    }
    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addNewItem(title)
            setTitle('')
        } else {
            setError('Title is required')
            console.log(error)
        }
    }

    return (
        <div>
            <TextField error={!!error}
                       helperText={error ? error : ''}
                       id="standard-basic"
                       label="Input title"
                       variant="outlined"
                       value={title}
                       onKeyDown={onKeyPressHandler}
                       onChange={onChangeHandler}/>
            <Button variant={"text"} onClick={addTaskHandler}>
                <ControlPointIcon/>
            </Button>
        </div>
    )
}