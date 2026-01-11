import React from 'react'
import './FirstCards.css'
const FirstCard = () => {
    return (
        <div className='Cards-Main'>
            <div className="top">
                <div className="horizon">
                    <p>About Horizon</p>
                </div>
                <p>At Horizon, we don't  just  play tennis-we  live it.Since 2021, Our clubs has been a home for players of all levels, from  eager begginer  to seasoned pros. </p>
            </div>
            <div className="Cards-container">
                <div className="Card top">
                    <div><i class="ri-ping-pong-line"></i>
                    <p><span>professional hards courts</span> with tournment-grades ligting & climate control - play <span>Perfect conditions in any season</span></p></div>
                   <div> <i class="ri-toggle-fill"></i> <span>Game Mode</span></div>

                </div>
                <div className="Card middle">
                    <p>Private & Group Lessons</p>
                </div>
                <div className="Card">
                    <div className="top">
                        <p>100+</p>
                        <p>Pro Coaches</p>
                        <p>Certified Professionals ready to boost your game from first serve to tournament level</p>
                    </div>
                    <div className="bottom">
                        <p>Beginner</p> <span className="range"></span>55
                        <p>Intermediate</p> <span className="range"></span>40
                        <p>Advanced</p> <span className="range"></span>35
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstCard
