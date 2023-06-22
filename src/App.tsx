import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const truck0 = "What to learn1"
    const truck1 = "What to learn22"
    const truck2 = 10200
    const truck3 = true

    const task1 = [
        {id:1, title: "HTML&CSS", isDone:true},
        {id:2, title: "JS", isDone:true},
        {id:3, title: "ReactJS", isDone:false},
        {id:4, title: "ReactJS", isDone:false}
    ]
    const task2 = [
        {id:1, title: "Hello World", isDone:true},
        {id:2, title: "123", isDone:true},
        {id:3, title: "ReactJS", isDone:false}
    ]




    return (
        <div className="App">
            <Todolist truck={truck0} truck2={truck2} tasks={task1}/>
            test
            <Todolist truck={truck1} truck3={truck3} tasks={task2}/>
        </div>
    );
}

export default App;
