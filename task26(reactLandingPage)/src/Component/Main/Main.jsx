import React from 'react'
import './Main.css'

const Main = () => {
    return (
        <div className='Main'>
            <img src="https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="overlay"></div>
            <div className="center">
                <h1>Unleash Your Inner Champion Today </h1>
                <h1>All In One Place</h1>
                <p>Join the ultimate tennise experience-where passion meets performance.</p>
                <p>and every swings brings you closer to victory</p>
                <div className="blue">
                    <h3>Start Your Own Journey</h3>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <p>trains with real Professionals</p>
                    <p> Get the real Results</p>
                </div>
                <div className="right">
                    <button>Instagram <i class="ri-arrow-right-up-line"></i></button>
                    <button>Facebook <i class="ri-arrow-right-up-line"></i></button>
                    <button>TikTok <i class="ri-arrow-right-up-line"></i></button>
                </div>
            </div>

        </div>
    )
}

export default Main
