import React, { useState } from 'react'
import { addTaskToList, removeTaskFromList } from '../Slice/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

function Tasks() {
    /* displatch creation */
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");

    /* Adding note to list */

    function addTask(e) {
        e.preventDefault();
        dispatch(addTaskToList({ title, time }));
        setTitle("");
        setTime("");
    }

    /* Deleting note from list */
    function deleteTask(task) {
        dispatch(removeTaskFromList(task))
    }

    /* Selecting task from list */
    const { taskList } = useSelector((state) => state.task);

    return (
        <div>
            <div className="task-page">
                <div className="task-input">
                    <div className="input-inside">
                        <h2><b> Add a Task</b></h2>
                        <input id='input'
                            type="text" placeholder='Add a task....'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ fontSize: "25px", marginTop: "20px" }} />

                        <div style={{ marginTop: '20px' }} ><i className="fa-regular fa-calendar"><small style={{ padding: "0px 10px" }}>Date/Time</small></i></div>
                        <input id='date' type="text" placeholder='Enter Time to Complete....'
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            style={{ fontSize: "20px" }} />
                        <div>
                            <button style={{ marginTop: '30px' }} className='btn btn-outline-dark' onClick={addTask}>Add</button>
                        </div>
                    </div>
                </div>
                <h3 className=' mx-5'><i className="fa-regular fa-circle-check  mx-3"></i><b>My Tasks</b></h3>
                <div className="display-task">
                    <div className="display-inside">
                        <ul className='task-list' style={{ overflowY: "auto", maxHeight: "300px" }}>
                            {taskList && taskList.map((task, index) => (

                                <li className='task-items' style={{ display: 'flex', justifyContent: 'space-between', overflowY: task.length >= 4 ? "auto" : "hidden" }} key={index}>
                                    <div>
                                        <i className="fa-regular fa-circle-check"></i>
                                    </div>
                                    <div>
                                        <h3> <b>{task.title}</b></h3>
                                        <p>{task.time}</p>
                                    </div>
                                    <div>
                                        <i className="fa-regular fa-trash-can" onClick={() => deleteTask(task)}></i>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks