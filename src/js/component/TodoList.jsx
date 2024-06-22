import { array } from "prop-types";
import React, { useState } from "react";

export const TodoList = () => {
    const [task, setTask] = useState("")
    const [myList, setMyList] = useState([])


    const handleTask = (event) => {
        console.log(event.target.value);
        setTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() !== "") {
            setMyList([...myList, task]);
        }
        setTask("")
    }

    return (
        <div className="container text-center mt-5 w-50 ">
            <h1 className="text-primary">Todo List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Title" className="form-label"></label>
                <input className="form-control" type="text" placeholder="Add your list" aria-label="default input example"
                    value={task} onChange={handleTask} />
            </form>
            <h4 className="text-start text-info mt-2">My List</h4>
            <ul className="list-group">
                {myList.map((text, index) => (
                    <li className="list-group-item hidden-icon d-flex justify-content-between" key={index}>{text}<i className="icon fas fa-trash" onClick={() => setMyList(myList.filter((t, currentIndex) => index != currentIndex))}></i> </li>
                ))}
                <li className="list-group-item text-end">{myList.length}items left</li>
            </ul>
        </div>
    )
}  
