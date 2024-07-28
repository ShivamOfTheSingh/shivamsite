import React, { useState } from 'react'
import WeekStats from './WeekStats';
import "./history.css"

const History = ({ repo }) => {
  const [selected, setSelected] = useState('week');
  let currStats;

  switch (selected) {
    case 'week':
      currStats = <WeekStats repos={repo} />
      break;
    case 'year':
      currStats = <WeekStats repos={repo} />
      break;
    case 'start':
      currStats = <WeekStats repos={repo} />
      break;
    default:
      currStats = <WeekStats repos={repo} />
  }

  return (
    <div className='histmain'>
      <div className='hist_head'>
        <p>My Github Activity For The </p>
        <button className={selected === 'week' ? 'selected' : ''} onClick={() => setSelected('week')}>Week</button>
        <button className={selected === 'year' ? 'selected' : ''} onClick={() => setSelected('year')}>Year</button>
        <button className={selected === 'start' ? 'selected' : ''} onClick={() => setSelected('start')}>Start of Time</button>
      </div>
      <div className='stats'>
        {currStats}
      </div>
    </div>
  )
}

export default History
