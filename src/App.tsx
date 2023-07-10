import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active"

function App() {
    const title1 = "What to learn1"
    // const title2 = "Songs"
    // const truck2 = 10200
    // const truck3 = true

    // let initTasks = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false},
    //     {id: 4, title: "Redux", isDone: false}
    // ]

    // let arr = useState(initTasks);
    // let tasks = arr[0]
    // let setTasks = arr[1]
    //
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Redux", isDone: false}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("all");

    // const task2 = [
    //     {id:1, title: "Hello World", isDone:true},
    //     {id:2, title: "I am happy", isDone:true},
    //     // {id:3, title: "Yo", isDone:false}
    // ]

    function removeTask(id: string) {

        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    let addTask = (newTitle: string) => {
        const newTask = {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask, ...tasks])

    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }


    const isDoneChanger = (id: string, isDone: boolean) => {
        let task = tasks.find(f => id === f.id)
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])

    }

    let tasksForTodoList = tasks;
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }


    return (
        <div className="App">
            <Todolist title={title1}
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      isDoneChanger={isDoneChanger}
                      filter={filter}
            />
            {/*<Todolist title={title2}  tasks={task2}/>*/}
        </div>
    );
}

export default App;
