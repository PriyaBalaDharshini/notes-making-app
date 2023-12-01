import React, { useEffect, useState } from 'react'
import { addNoteToList, removeNoteFromList, updateNoteInList, setSelectedNote } from '../Slice/noteSlice';
import { useDispatch, useSelector } from 'react-redux';

function Notes() {

    /* displatch creation */
    const dispatch = useDispatch();

    const [time, setTime] = useState(new Date());
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [id, setId] = useState(0)
    const [buttonText, setButtonText] = useState("Add")

    /* For Displaying Time */
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000);
    })

    /* Adding note to list */
    function addNote(e) {
        e.preventDefault();
        const currentTime = new Date();
        if (id === 0) {
            dispatch(addNoteToList({ title, note, time: currentTime }));
        }
        else {
            dispatch(updateNoteInList({ id, title, note, time: currentTime }));
        }

        setTitle("");
        setNote("");
        setId(0);
        setButtonText("Edit");
        dispatch(setSelectedNote({}));
    }

    /* Deleting note from list */
    function deleteNote(note) {
        dispatch(removeNoteFromList(note));
    }

    /* Selecting note from list */
    const { noteList } = useSelector((state) => state.note);

    /* Displaying in UI for Updating */
    const { selectedNote } = useSelector((state) => state.note);

    function editNote(note) {
        dispatch(setSelectedNote(note));
    }

    useEffect(() => {
        if (selectedNote && Object.keys(selectedNote).length !== 0) {
            setTitle(selectedNote.title);
            setNote(selectedNote.note);
            setId(selectedNote.id);
            setButtonText("Update");
        } else {
            setButtonText("Add");
        }
    }, [selectedNote]);

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
                                value={title}
                            />
                        </h3>
                        <input id="input-note"
                            type="text"
                            placeholder='Take a Note...'
                            onChange={(e) => setNote(e.target.value)}
                            value={note} />

                        <span id='time-display'><i class="fa-regular fa-clock"></i>{`${time.toLocaleTimeString()}`}</span>
                        <div>
                            <button className='btn btn-outline-dark' onClick={addNote} >{buttonText}</button>
                        </div>

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
                    <div className="notes-box" style={{ overflowX: 'auto', display: 'flex', gap: '5px' }}>
                        <div style={{ display: "flex" }}>
                            {noteList && noteList.map((note) => (<div class="card" style={{ width: '16rem' }}>
                                <div class="card-body">
                                    <h4 class="card-title"><b>{note.title}</b></h4>
                                    <p class="card-text" style={{ fontSize: "25px" }}>{note.note}</p>
                                    <p className='card-text'>
                                        {new Date(note.time).toLocaleTimeString()}
                                    </p>
                                    <div className="buttons">
                                        <button onClick={() => editNote(note)} className='btn'><i class="fa-solid fa-pencil"></i>Edit</button>
                                        <button onClick={() => deleteNote(note)} className='btn'><i class="fa-regular fa-trash-can"></i>Delete</button>
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