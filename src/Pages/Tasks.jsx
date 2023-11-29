import React, { useState } from 'react'
import { addTaskToList } from '../Slice/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

function Tasks() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    /* const [id, setId] = useState(0) */

    function addTask(e) {
        e.preventDefault();
        dispatch(addTaskToList({ title, time }));
        setTitle("");
        setTime("");
    }
    const { taskList } = useSelector((state) => state.task)

    return (

        <div>
            <div className="task-page">
                <div className="task-input">
                    <div className="input-inside">
                        <h2><b> Add a Task</b></h2>
                        <h3 className='text-muted'>Title...</h3>
                        <input id='input'
                            type="text" placeholder='Add a task....'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />

                        <div><i className="fa-regular fa-calendar"><small style={{ padding: "0px 10px" }}>Date/Time</small></i></div>
                        <input id='date' type="text" placeholder='Enter Time to Complete....'
                            value={time}
                            onChange={(e) => setTime(e.target.value)} />
                        <div>
                            <button style={{ marginTop: '10px' }} className='btn btn-outline-dark' onClick={addTask}>Add Task</button>
                        </div>
                    </div>
                </div>
                <h3 className=' mx-5'><i className="fa-regular fa-circle-check  mx-3"></i><b>My Tasks</b></h3>
                <div className="display-task">
                    <div className="display-inside">
                        <ul className='task-list'>
                            {taskList && taskList.map((task, index) => (

                                <li className='task-items' style={{ display: 'flex', justifyContent: 'space-between', overflowY: task.length >= 4 ? "auto" : "hidden" }} key={index}>
                                    <div>
                                        <i className="fa-regular fa-circle-check"></i>
                                    </div>
                                    <div>
                                        <h5>{task.title}</h5>
                                        <small>{task.time}</small>
                                    </div>
                                    <div>
                                        <i className="fa-regular fa-star"></i>
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