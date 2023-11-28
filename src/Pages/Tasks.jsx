import React, { useEffect, useRef } from 'react'

function Tasks() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })


    return (
        <div>
            <div className="task-page">
                <div className="task-input">
                    <div className="input-inside">
                        <h2><b> Add a Task</b></h2>
                        <h3 className='text-muted'>Title...</h3>
                        <input id='input' type="text" placeholder='Add a task....' ref={inputRef} />

                        <div><i className="fa-regular fa-calendar"><small style={{ padding: "0px 10px" }}>Date/Time</small></i></div>
                        <input id='date' type="text" placeholder='Enter Time to Complete....' />
                    </div>
                </div>
                <h3 className=' mx-5'><i className="fa-regular fa-circle-check  mx-3"></i><b>My Tasks</b></h3>
                <div className="display-task">
                    <div className="display-inside">
                        <ul className='task-list'>

                            <li className='task-items' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <i className="fa-regular fa-circle-check"></i>
                                </div>
                                <div>
                                    <h5>Hi</h5>
                                    <small>Time</small>
                                </div>
                                <div>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            </li>
                            <li className='task-items'></li>
                            <li className='task-items'></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks