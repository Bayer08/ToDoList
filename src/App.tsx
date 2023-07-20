import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
import {InputForm} from "./InputForm";

export type FilterValuesType = 'all' | 'completed' | 'active'
type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolist, setTodolist] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'}
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(todoListsId: string, taskId: string) {
        setTasks({...tasks, [todoListsId]: tasks[todoListsId].filter(el => el.id !== taskId)})
    }

    let addTask = (todoListsId: string, newTitle: string) => {
        let newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks({...tasks, [todoListsId]: [newTask, ...tasks[todoListsId]]})

    }

    function changeFilter(todoListsId: string, value: FilterValuesType) {
        // setFilter(value)
        setTodolist(todolist.map(el => el.id === todoListsId ? {...el, filter: value} : el))
    }


    const isDoneChanger = (todoListsId: string, id: string, isDoneValue: boolean) => {

        setTasks({...tasks,[todoListsId]: tasks[todoListsId].map(el => el.id === id ? {...el, isDone: isDoneValue} : el)})
    }
    const removeTodoList = (todoListsId: string) => {
        setTodolist(todolist.filter(el => el.id !== todoListsId))
        delete tasks[todoListsId]
    }
    const addNewTodoLIst = (title:string) => {
        let newTodoList:TodolistType = {id:v1(), title:title, filter: 'all'}
        setTodolist([newTodoList, ...todolist])
        setTasks({...tasks,[newTodoList.id]:[]})
    }

    const editableSpanChanger = (todoListsId: string, id:string, newTitle:string) => {
        setTasks({...tasks,[todoListsId]:tasks[todoListsId].map(el => el.id === id ? {...el, title: newTitle} : el)})

    }

    const editableSpanTitleChanger = (todoListsId: string, newTitle:string) => {

        let newTodoList =todolist.find(el=>el.id === todoListsId)
        if (newTodoList) {
            newTodoList.title = newTitle
            setTodolist([...todolist])
        }
        console.log(todolist)
    }

    return (
        <div className="App">
            <InputForm addNewItem={addNewTodoLIst}/>
            {todolist.map(el => {
                let tasksForTodoList = tasks[el.id];
                if (el.filter === "completed") {
                    tasksForTodoList = tasks[el.id].filter(t => t.isDone === true)
                }
                if (el.filter === "active") {
                    tasksForTodoList = tasks[el.id].filter(t => t.isDone === false)
                }
                return (
                    <Todolist
                        key={el.id}
                        todoListsId={el.id}
                        title={el.title}
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        isDoneChanger={isDoneChanger}
                        filter={el.filter}
                        removeTodoList={removeTodoList}
                        editableSpanTaskChanger={editableSpanChanger}
                        editableSpanTitleChanger={editableSpanTitleChanger}
                    />
                )
            })}
        </div>
    );
}

export default App;
