import React from 'react';
import ActivityCard from './ActivityCard';

const ActivitySection = () => {
    return (
        <div>
           <div className='activitySection'>
                <h2>Activités à Marseille</h2>
                <div className='activitySectionOne'>
                    <ActivityCard/>
                </div>
           </div>
        </div>
    );
};

export default ActivitySection;