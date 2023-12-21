import React from 'react'
import './Choice.css'

function Choice({choice}: {choice: any}) {
  return (
    <div className='choice'>{choice}</div>
  )
}

export default Choice