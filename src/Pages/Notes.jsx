import React, { useEffect, useState } from 'react'

function Notes() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000);
    })
    return (
        <div>
            <div className="notes-page">
                <div className="note-input">
                    <div className="note-inside">
                        <h2><b> Add a Note</b></h2>
                        <h3>
                            <input id='note-title' type="text" placeholder='Title...' />
                        </h3>
                        <input id="input-note" type="text" placeholder='Take a Note...' />

                        <span id='time-display'><i class="fa-regular fa-clock"></i>{`${time.getHours()}: ${time.getMinutes()}`}</span>
                        <div className="icons-notes">
                            <ul style={{ display: 'flex', listStyleType: 'none' }}>
                                <li><i class="fa-solid fa-fill-drip"></i></li>
                                <li><i class="fa-solid fa-list-ul"></i></li>
                                <li><i class="fa-solid fa-underline"></i></li>
                                <li><i class="fa-solid fa-align-left"></i></li>
                                <li><i class="fa-solid fa-rotate-left"></i></li>
                                <li><i class="fa-solid fa-rotate-right"></i></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <h3 className=' mx-5'><i class="fa-solid fa-list-check mx-3"></i><b>My Notes</b></h3>
                <div className="note-display">
                    <div className="notes-box" >
                        <div style={{ display: "flex" }}>

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
        </div >
    )
}

export default Notes