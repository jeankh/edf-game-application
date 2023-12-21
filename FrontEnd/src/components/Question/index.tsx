import React from 'react'
import './Question.css'

function Question( {question}: {question: any}) {

  return (
    <div className='question-div' > {question}</div>
  )
}

export default Question