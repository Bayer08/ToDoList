import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import {Button} from "./components/Button/Button";
import {InputForm} from "./InputForm";
import {EditableSpan} from "./EditableSpan";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (todoListsId: string, id: string) => void
    changeFilter: (todoListsId: string, value: FilterValuesType) => void
    addTask: (todoListsId: string, title: string) => void
    isDoneChanger: (todoListsId: string, id: string, isDone: boolean) => void
    filter: string
    todoListsId: string
    removeTodoList: (todoListsId: string) => void
    editableSpanTaskChanger: (todoListsId: string, title: string, id:string) => void
    editableSpanTitleChanger: (todoListsId: string, title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {



    const removeTaskHandler = (todoListsId: string, eid: string) => {
        props.removeTask(todoListsId, eid)
    }
    const tsarChangeFilter = (todoListsId: string, value: FilterValuesType) => {
        props.changeFilter(todoListsId, value)
    }

    const addTask =(title:string) =>{
        props.addTask(props.todoListsId, title)
    }

    const removeTodoListHandler = () => {
        props.removeTodoList(props.todoListsId)
    }
   const editableSpanTitleChangerHandler=(title:string) => {
        props.editableSpanTitleChanger(props.todoListsId, title)
    }

    return (
        <div>
            <h3>
                <EditableSpan title={props.title} callback={editableSpanTitleChangerHandler}/>
                <button onClick={removeTodoListHandler}>x</button>
            </h3>
            <InputForm addNewItem={addTask}/>
            <ul>
                {props.tasks.map((el) => {
                    const onChangeInputHandler = (isDone: ChangeEvent<HTMLInputElement>) => {
                        props.isDoneChanger(props.todoListsId, el.id, isDone.currentTarget.checked)
                    }
                    const editableSpanChangerHandler = (title:string)=> {
                        props.editableSpanTaskChanger(props.todoListsId, el.id, title)
                    }
                    return <li key={el.id} className={el.isDone === true ? "completed" : ""}>
                        <input
                            onChange={onChangeInputHandler}
                            type="checkbox"
                            checked={el.isDone}/>
                        <EditableSpan callback={editableSpanChangerHandler} title={el.title}/>
                        <Button className={''} name={'x'} callBack={() => removeTaskHandler(props.todoListsId, el.id)}/>
                    </li>
                })}
            </ul>

            <div>
                <Button className={props.filter === 'all' ? "activeFilter" : ""}
                        callBack={() => tsarChangeFilter(props.todoListsId, 'all')} name={'All'}/>
                <Button className={props.filter === 'active' ? "activeFilter" : ""}
                        callBack={() => tsarChangeFilter(props.todoListsId, 'active')} name={'Active'}/>
                <Button className={props.filter === 'completed' ? "activeFilter" : ""}
                        callBack={() => tsarChangeFilter(props.todoListsId, 'completed')} name={'Completed'}/>
            </div>
        </div>
    )
}

