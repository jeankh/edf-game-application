import React from 'react'
import './Round.css'
import Question from '../Question'
import Choice from '../Choice'

function Round({situation}: {situation: any}) {
    const {id_situation,
        question,
        first_choice,
        first_choice_electric_charge,
        seconde_choice,
        seconde_choice_electric_charge,
        third_choice,
        third_choice_electric_charge,
        right_answer,
        category} = situation


      



  return (
    <div className='round'>
        <Question question={question} />
        <div className='choices'>
        <Choice choice={first_choice} />
        <Choice choice={seconde_choice} />
        <Choice choice={third_choice} />
          </div>    

        <button>Go next</button>
    </div>
  )
}

export default Round