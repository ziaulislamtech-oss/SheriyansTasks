import React from 'react'
import './Nav.css'
const NavBar = () => {
    return (
        <div className='main'>
            <div className="first">
                <h2>Horizan Courts</h2>
            </div>
            <div className="second">
                <button>About Us</button>
                <button>Services</button>
                <button>Coaches</button>
                <button>Events</button>
                <button>Contacts</button>
            </div>
            <div className="third">
                <button>Book now <i className="ri-arrow-right-up-line"></i></button>
            </div>
        </div>
    )
}

export default NavBar
