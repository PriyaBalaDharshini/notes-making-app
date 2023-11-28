import React from 'react'

function Home() {
    return (
        <div>
            <div className="home-page">
                <h1 className='mx-5 my-5' ><b>Welcome</b></h1>
                <h3 className='mx-5'><i class="fa-solid fa-list-check mx-3"></i><b>My Notes</b></h3>
                <div className="tasks-home">

                    <div className="note-display">
                        <div className="notes-box" >
                            <div style={{ display: "flex" }}>
                                <div class="card" style={{ width: '16rem' }}>
                                    <div class="card-body">
                                        <h4 class="card-title">Card title</h4>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="buttons">
                                            <button className='btn btn-outline-dark'><i class="fa-solid fa-pencil"></i>Edit</button>
                                            <button className='btn btn-outline-dark'><i class="fa-regular fa-trash-can"></i>Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" style={{ width: '16rem'/* , overflowX: note.length >= 4 ? 'auto' : 'hidden' */ }}>
                                    <div class="card-body">
                                        <h4 class="card-title">Card title</h4>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="buttons">
                                            <button className='btn btn-outline-dark'><i class="fa-solid fa-pencil"></i>Edit</button>
                                            <button className='btn btn-outline-dark'><i class="fa-regular fa-trash-can"></i>Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" style={{ width: '16rem' }}>
                                    <div class="card-body">
                                        <h4 class="card-title">Card title</h4>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="buttons">
                                            <button className='btn btn-outline-dark'><i class="fa-solid fa-pencil"></i>Edit</button>
                                            <button className='btn btn-outline-dark'><i class="fa-regular fa-trash-can"></i>Delete</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <h3 className=' mx-5'><i className="fa-regular fa-circle-check  mx-3"></i><b>My Tasks</b></h3>
                <div className="notes-home">
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
        </div>
    )
}

export default Home