import React, { useState } from 'react'
import "./history.css"

const History = () => {
  const [selected, setSelected] = useState('week');

  return (
    <div className='histmain'>
      <div className='hist_head'>
        <p>My Github Activity For The </p>
        <button
          className={selected === 'week' ? 'selected' : ''}
          onClick={() => setSelected('week')}
        >
          Week
        </button>
        <button
          className={selected === 'year' ? 'selected' : ''}
          onClick={() => setSelected('year')}
        >
          Year
        </button>
        <button
          className={selected === 'start' ? 'selected' : ''}
          onClick={() => setSelected('start')}
        >
          Start of Time
        </button>
      </div>
    </div>
  )
}

export default History
