import React from 'react'
import './FirstCards.css'
import tenniseCourt from '../../assets/tennisCourt.png'
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
                    <div><img src={tenniseCourt} alt="" />
                        <p><span>professional hards courts</span> with tournment-grades ligting & climate control - play <span>Perfect conditions in any season</span></p></div>
                    <div> <i class="ri-toggle-fill"></i> <span>Game Mode</span></div>

                </div>
                <div className="Card middle">
                    <p>Private & Group Lessons</p>
                </div>
                <div className="Card third">
                    <div className="top">
                        <h3>100+</h3>
                        <p>Pro Coaches</p>
                        <p className='thirdPara'>Certified Professionals ready to boost your game from first serve to tournament level</p>
                    </div>
                    <div className="bottom">
                        <div className='progressBar'>
                            <p>Intermediate  <span className="range second"></span>40</p>
                            </div>
                        <div className='progressBar'>
                            <p>Beginner<span className="range first"></span>55</p> 
                            </div>
                        <div className='progressBar'>
                            <p>Advanced &nbsp; <span className="range third"></span>35</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstCard
