import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';


function Home() {
    const { taskList } = useSelector((state) => state.task);
    const { noteList } = useSelector((state) => state.note);

    return (
        <div>
            <div className="home-page">
                <h1 className='mx-5 my-5' ><b>Welcome</b></h1>
                <h3 className='mx-5'><i class="fa-solid fa-list-check mx-3"></i><b>My Notes</b></h3>
                <div className="tasks-home">

                    <div className="note-display">
                        <div className="notes-box" style={{ overflowX: 'auto', display: 'flex', gap: '5px' }}>
                            <div style={{ display: "flex" }}>
                                {noteList && noteList.map((note, index) => (
                                    <div class="card" style={{ width: '16rem' }}>
                                        <div class="card-body">
                                            <h4 class="card-title">{note.title}</h4>
                                            <p class="card-text">{note.note}</p>
                                        </div>
                                    </div>
                                ))}



                            </div>
                        </div>
                    </div>

                </div>
                <h3 className=' mx-5'><i className="fa-regular fa-circle-check  mx-3"></i><b>My Tasks</b></h3>
                <div className="notes-home">
                    <div className="display-task">
                        <div className="display-inside">
                            <ul className='task-list'>
                                {taskList && taskList.map((task, index) => (
                                    <li key={index} className='task-items' style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home