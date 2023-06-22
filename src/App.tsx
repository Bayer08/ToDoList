import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const title1 = "What to learn1"
    const title2 = "Movies"
    // const truck2 = 10200
    // const truck3 = true

    const task1 = [
        {id:1, title: "HTML&CSS", isDone:true},
        {id:2, title: "JS", isDone:true},
        {id:3, title: "ReactJS", isDone:false},
        // {id:4, title: "ReactJS", isDone:false}
    ]
    const task2 = [
        {id:1, title: "Terminator", isDone:true},
        {id:2, title: "XXX", isDone:true},
        {id:3, title: "Jentlments of Fortune", isDone:false}
    ]




    return (
        <div className="App">
            <Todolist title={title1} tasks={task1}/>
            <Todolist title={title2}  tasks={task2}/>
        </div>
    );
}

export default App;
