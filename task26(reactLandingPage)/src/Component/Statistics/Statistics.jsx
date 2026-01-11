import React from 'react';
import './Statistics.css';

const Statistics = () => {
    const statisticsData = [
        {
            id: 1,
            number: "12,000+",
            title: "Hours of play annually",
        },
        {
            id: 2,
            number: "89%",
            title: "Player Retention Rate",
        },
        {
            id: 3,
            number: "1,200+",
            title: "Active Members",
        },
        {
            id: 4,
            number: "125+",
            title: "Annual Tournaments",
        }
    ];

    return (
        <div className="statistics-container">
            <div className="statistics-header">
                <h2 className="statistics-title">
                    A few more facts about us in numbers
                </h2>
                <div className="statistics-divider"></div>
            </div>

            <div className="statistics-grid">
                {statisticsData.map((stat) => (
                    <div key={stat.id} className="stat-card">
                        <div className="stat-number">{stat.number}</div>
                        <h3 className="stat-title">{stat.title}</h3>
                        <div className="stat-decoration">
                            <div className="stat-dot"></div>
                            <div className="stat-line"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;