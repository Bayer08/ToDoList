import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button} from "./components/Button/Button";

type InputForm = {
    // title: string
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
            <input className={error !== '' ? "error" : ''}
                   value={title}
                   onKeyDown={onKeyPressHandler}
                   onChange={onChangeHandler}/>
            <Button className={''} callBack={addTaskHandler} name={'+'}/>
            {error && <div className="errorMassage">{error}</div>}
        </div>
    )
}