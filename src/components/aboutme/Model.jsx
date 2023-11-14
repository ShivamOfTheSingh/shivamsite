import React from 'react'
import "./Model.css"

const Model = ({ modelName }) => {
  return (
      <div className='ModelMain'>
          <div className='Model'>{modelName}</div>
      </div>
  )
}

export default Model