import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import {InputForm} from "./InputForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import ClearIcon from '@mui/icons-material/Clear'

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
    editableSpanTaskChanger: (todoListsId: string, title: string, id: string) => void
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
    const addTask = (title: string) => {
        props.addTask(props.todoListsId, title)
    }
    const removeTodoListHandler = () => {
        props.removeTodoList(props.todoListsId)
    }
    const editableSpanTitleChangerHandler = (title: string) => {
        props.editableSpanTitleChanger(props.todoListsId, title)
    }
    return (
        <div>
            <Typography variant={"h5"}>
                <EditableSpan title={props.title} callback={editableSpanTitleChangerHandler}/>
                <Button onClick={removeTodoListHandler}>
                    <ClearIcon/>
                </Button>
            </Typography>
            <InputForm addNewItem={addTask}/>
            <div>
                {props.tasks.map((el) => {
                    const onChangeInputHandler = (isDone: ChangeEvent<HTMLInputElement>) => {
                        props.isDoneChanger(props.todoListsId, el.id, isDone.currentTarget.checked)
                    }
                    const editableSpanChangerHandler = (title: string) => {
                        props.editableSpanTaskChanger(props.todoListsId, el.id, title)
                    }
                    return <div key={el.id} className={el.isDone === true ? "completed" : ""}>
                        <Checkbox
                            size={"small"}
                            onChange={onChangeInputHandler}
                            checked={el.isDone}/>
                        <EditableSpan callback={editableSpanChangerHandler} title={el.title}/>
                        <Button onClick={() => removeTaskHandler(props.todoListsId, el.id)}>
                            <DeleteIcon/>
                        </Button>
                    </div>
                })}
            </div>
            <div>
                <Button variant={props.filter === 'all' ? "contained" : "text"}
                        onClick={() => tsarChangeFilter(props.todoListsId, 'all')}>All</Button>
                <Button variant={props.filter === 'active' ? "contained" : "text"}
                            onClick={() => tsarChangeFilter(props.todoListsId, 'active')}>Active</Button>
                <Button variant={props.filter === 'completed' ? "contained" : "text"}
                            onClick={() => tsarChangeFilter(props.todoListsId, 'completed')}>Completed</Button>
            </div>
        </div>
    )
}

