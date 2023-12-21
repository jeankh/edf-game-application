import React , {useState} from 'react'
import './Round.css'
import Question from '../Question'
import Choice from '../Choice'

function Round({situation}: {situation: any}) {
  const [selected, setSelected] = useState(false)
  const [answer, setAnswer] = useState('')
  const [consumption, setConsumption] = useState(0)
    const {id_situation,
        question,
        first_choice,
        first_choice_electric_charge,
        seconde_choice,
        seconde_choice_electric_charge,
        third_choice,
        third_choice_electric_charge,
        right_answer,
        category,
        advice} = situation

  const handleSelectoin = (choice: any) => {
    setSelected(true)
    handleChoice(choice)
  }

  const handleChoice = (choice: any) => {
    setAnswer(choice)
    switch (choice) {
      case first_choice:
        setConsumption(first_choice_electric_charge + consumption)
        break;
      case seconde_choice:
        setConsumption(seconde_choice_electric_charge + consumption)
        break;
      case third_choice:
        setConsumption(third_choice_electric_charge + consumption)
        break;
      default:
        break;
    }

  }
      



  return (
    <div className='round'>
        <Question question={question} />
        <div className='choices'>
        <Choice choice={first_choice}  handleClick={handleSelectoin}  />
        <Choice choice={seconde_choice} handleClick={handleSelectoin} />category
        <Choice choice={third_choice} handleClick={handleSelectoin}/>
          </div>    

        { selected && (

        
          <div className='answer'>
            <div className='answer-text'>
              <p>{right_answer}</p>
              <p>{advice}</p>
              </div>
	          <button>Go next</button>

          </div>)
        } 
         
    </div>
  )
}

export default Round

