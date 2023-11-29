import React, { useEffect, useState } from 'react'
import { addNoteToList } from '../Slice/noteSlice';
import { useDispatch, useSelector } from 'react-redux';

function Notes() {
    const dispatch = useDispatch();

    const [time, setTime] = useState(new Date());
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("");

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000);
    })

    function addNote(e) {
        e.preventDefault();
        console.log(title);
        console.log(note);
        dispatch(addNoteToList({ title, note }));
    }
    const { noteList } = useSelector((state) => state.note);

    return (
        <div>
            <div className="notes-page">
                <div className="note-input">
                    <div className="note-inside">
                        <h2><b> Add a Note</b></h2>
                        <h3>
                            <input id='note-title'
                                type="text"
                                placeholder='Title...'
                                onChange={(e) => setTitle(e.target.value)}
                                value={title} />
                        </h3>
                        <input id="input-note"
                            type="text"
                            placeholder='Take a Note...'
                            onChange={(e) => setNote(e.target.value)}
                            value={note} />
                        <div><button className='btn btn-outline-dark' onClick={addNote} >Add</button></div>

                        <span id='time-display'><i class="fa-regular fa-clock"></i>{`${time.toLocaleTimeString()}`}</span>
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
                            {noteList && noteList.map((note) => (<div class="card" style={{ width: '16rem' }}>
                                <div class="card-body">
                                    <h4 class="card-title">{note.title}</h4>
                                    <p class="card-text">{note.note}</p>
                                    <div className="buttons">
                                        <button className='btn btn-outline-dark'><i class="fa-solid fa-pencil"></i>Edit</button>
                                        <button className='btn btn-outline-dark'><i class="fa-regular fa-trash-can"></i>Delete</button>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Notes