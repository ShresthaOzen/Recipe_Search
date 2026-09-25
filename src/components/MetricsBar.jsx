import React from 'react'

const stats = [
        { icon: 'soup_kitchen', value: '300+', label: 'Recipes to Explore' },
        { icon: 'timer', value: '30 min', label: 'Avg. Prep Time' },
        { icon: 'favorite', value: '1000+', label: 'Recipes Saved by Cooks' },
        { icon: 'verified', value: '4.9 / 5.0', label: 'Loved by Home Cooks' },
    ];

const MetricsBar = () => {
   
    return (
        <>
            <div className="metrics-bar">
                {stats.map((stat)=> (
                    <div className="metric-item" key={stat.label}>
                        <span className="material-symbols-outlined metric-icon">{stat.icon}</span>
                        <div>
                            <span className="metric-value">{stat.value}</span>
                            <p className="metric-label">{stat.label}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default MetricsBar
