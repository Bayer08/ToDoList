import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import {Button} from "./components/Button/Button";
// import './App.css';

type PropsType = {
    title: string
    tasks: Array<TaskType>
    //  tasks: TaskType[]
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    isDoneChanger: (id: string, isDone: boolean) => void
    filter: string

}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<string>('')
    // const changeFilterAll = () => {
    //     props.changeFilter("all")
    // }
    // const changeFilterActive = () => {
    //     props.changeFilter("active")
    // }
    // const changeFilterCompleted = () => {
    //     props.changeFilter("completed")
    // }
    const removeTaskHandler = (eid: string) => {
        props.removeTask(eid)
    }
    const tsarChangeFilter = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addTask(title)
            setTitle('')
        } else {
            setError('Title is required')
            console.log(error)
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(e.currentTarget.value)
        console.log('Error === 0')
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTaskHandler()
        }
        // console.log(e.key)
    }
    // console.log(props.filter)
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input className={error !== '' ? "error" : ''}
                       value={title}
                       onKeyDown={onKeyPressHandler}
                       onChange={onChangeHandler}/>
                <Button className={''} callBack={addTaskHandler} name={'+'}/>
                {error && <div className="errorMassage">{error}</div>}
            </div>
            <ul>
                {props.tasks.map((el) => {
                    const onChangeInputHandler = (isDone: ChangeEvent<HTMLInputElement>) => {
                        props.isDoneChanger(el.id, isDone.currentTarget.checked)
                    }

                    return <li key={el.id} className={el.isDone === true ? "completed" : ""}>
                        <input
                            onChange={onChangeInputHandler}
                            type="checkbox"
                            checked={el.isDone}/>
                        <span>{el.title}</span>
                        <Button className={''} name={'x'} callBack={() => removeTaskHandler(el.id)}/>
                        {/*<button onClick={() => removeTaskHandler(el.id)}>x</button>*/}
                        {/*<button onClick={() => {*/}
                        {/*    props.removeTask(el.id)*/}
                        {/*}}>x*/}
                        {/*</button>*/}
                    </li>
                })}
                {/*    <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                {/*    <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                {/*    <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>

            <div>
                <Button className={props.filter === 'all' ? "activeFilter" : ""}
                        callBack={() => tsarChangeFilter('all')} name={'All'}/>
                <Button className={props.filter === 'active' ? "activeFilter" : ""}
                        callBack={() => tsarChangeFilter('active')} name={'Active'}/>
                {/*<button onClick={() => tsarChangeFilter('completed')}>Completed</button>*/}
                <Button className={props.filter === 'completed' ? "activeFilter" : ""}
                        callBack={() => tsarChangeFilter('completed')} name={'Completed'}/>
            </div>
        </div>
    )
}