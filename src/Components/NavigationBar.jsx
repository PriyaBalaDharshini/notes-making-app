import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
    return (
        <div>
            <h4 style={{ margin: "30px 40px" }}> <b>Notes App</b></h4>
            <ul style={{ listStyleType: 'none' }}>
                <li><Link className="list-items" to={'/'}><i className="fa-solid fa-house"></i>Home</Link></li>
                <li><Link className='list-items' to={'/Search'}><i class="fa-solid fa-magnifying-glass"></i>Search</Link></li>
                <li><Link className='list-items' to={'/Notes'}><i class="fa-solid fa-file-circle-check"></i>Notes</Link></li>
                <li><Link className='list-items' to={'/Tasks'}><i class="fa-regular fa-circle-check"></i>Tasks</Link></li>
                <li><Link className='list-items' to={'/Archive'}><i class="fa-solid fa-box-archive"></i>Archive</Link></li>
                <li><Link className='list-items' to={'/Bin'}><i class="fa-solid fa-trash-can"></i>Bin</Link></li>
            </ul>
        </div>
    )
}

export default NavigationBar