// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import './todo.css';

function Task({ task, index, completeTask, removeTask }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}

            <div class='firstBtn'>
                <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
            </div>
            <div class="set-wakeup">
                <span class="wakeup-logo"></span>
                {/* <span class="wakeup-text">Set wake up time</span> */}
                <select name="dropdown" id="wakeup-time" class="wakeup-dropdown">
                    <option value="" class="">Select Time</option>
                    <option value="0" class="">12 AM - 01 AM</option>
                    <option value="1" class="">01 AM - 02 AM</option>
                    <option value="2" class="">02 AM - 03 AM</option>
                    <option value="3" class="">03 AM - 04 AM</option>
                    <option value="4" class="">04 AM - 05 AM</option>
                    <option value="5" class="">05 AM - 06 AM</option>
                    <option value="6" class="">06 AM - 07 AM</option>
                    <option value="7" class="">07 AM - 08 AM</option>
                    <option value="8" class="">08 AM - 09 AM</option>
                    <option value="9" class="">09 AM - 10 AM</option>
                    <option value="10" class="">10 AM - 11 AM</option>
                    <option value="11" class="">11 AM - 12 PM</option>
                    <option value="12" class="">12 PM - 01 PM</option>
                    <option value="13" class="">01 PM - 02 PM</option>
                    <option value="14" class="">02 PM - 03 PM</option>
                    <option value="15" class="">03 PM - 04 PM</option>
                    <option value="16" class="">04 PM - 05 PM</option>
                    <option value="17" class="">05 PM - 06 PM</option>
                    <option value="18" class="">06 PM - 07 PM</option>
                    <option value="19" class="">07 PM - 08 PM</option>
                    <option value="20" class="">08 PM - 09 PM</option>
                    <option value="21" class="">09 PM - 10 PM</option>
                    <option value="22" class="">10 PM - 11 PM</option>
                    <option value="23" class="">11 PM - 12 AM</option>
                </select>
            </div>
            {/* <button onClick={() => setTimeTask(index)} >24hours</button> */}
            <div class="secBtn">
                <button onClick={() => completeTask(index)}>Done</button>
            </div>
        </div>
    );
}

function Todo() {

    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        // {
        //     title: "Grab some Pizza",
        //     completed: true
        // },
        // {
        //     title: "Do your workout",
        //     completed: true
        // },
        {
            title: "Hangout with friends",
            completed: false
        }
    ]);
    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed).length)
    });

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };
    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };
    // const setTimeTask = index => {
    //     const newTasks = [...tasks];
    //     newTasks[index].completed = true;
    //     setTasks(newTasks);
    // };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };
    return (
        <div className="todo-container">
            <div className="header">Pending tasks ({tasksRemaining})</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        // setTimeTask = {setTimeTask}
                        removeTask={removeTask}
                        key={index}
                    />
                ))}
            </div>
            {/* <div className='add-time'>
                    <CreateTask addTime = {addTime}/>
                </div> */}
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}
// handleChange(date) {
//     this.setState({
//       startDate: date
//     })
//   }

function CreateTask({ addTask }) {
    const [value, setValue] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        addTask(value);
        setValue("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>

                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add a new task"
                    onChange={e => setValue(e.target.value)}
                />
                

            </div>
        </form>
    );
}





export default Todo;