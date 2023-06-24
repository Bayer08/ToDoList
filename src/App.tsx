import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const title1 = "What to learn1"
    // const title2 = "Songs"
    // const truck2 = 10200
    // const truck3 = true

    let initTasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ]

    // let arr = useState(initTasks);
    // let tasks = arr[0]
    // let setTasks = arr[1]
    //
    let [tasks, setTasks] = useState(initTasks);

    // const task2 = [
    //     {id:1, title: "Hello World", isDone:true},
    //     {id:2, title: "I am happy", isDone:true},
    //     // {id:3, title: "Yo", isDone:false}
    // ]

    function removeTask(id: number) {

        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }


    return (
        <div className="App">
            <Todolist title={title1}
                      tasks={tasks}
                      removeTask={removeTask}
            />
            {/*<Todolist title={title2}  tasks={task2}/>*/}
        </div>
    );
}

export default App;
