export interface TestsProps {}

import { useStateContext } from "../../contexts/ContextProvider";
import { useDispatch } from 'react-redux';
import { saveChoice } from '../../reducers/Ducks/situationDukck';
import {Situation} from '../../types/models/Situation'
import {RootState} from '../../reducers/rootReducer'

import { useSelector } from 'react-redux';



export const useTests= (props: TestsProps) => {
  const data = [
    {
      id_situation: 1,
      category: "home",
      first_choice: "Turning off unused appliances.",
      first_choice_electric_charge: 1,
      question: "What's the most effective way to reduce electricity waste?",
      second_choice: "Leaving appliances on standby mode.",
      second_choice_electric_charge: 2,
      third_choice: "Increasing usage of electronic devices.",
      third_choice_electric_charge: 3,
      right_answer: "Turning off unused appliances",
      advise: "Turning off appliances when not in use can significantly save electricity and reduce bills.",
    },
    {
      id_situation: 2,
      category: "office",
      first_choice: "Using natural light during the day.",
      first_choice_electric_charge: 1,
      question: "How can you optimize light usage in the office?",
      second_choice: "Keeping all lights on regardless of daylight.",
      second_choice_electric_charge: 2,
      third_choice: "Using extra lamps even in brightly lit areas.",
      third_choice_electric_charge: 3,
      right_answer: "Using natural light during the day",
      advise: "Utilizing natural light reduces the need for artificial lighting and saves energy.",
    }
  ];


  const situations = useSelector((state: RootState) => state.situations);

  // Now 'situations' holds the data from the Redux store
  console.log('Situation data:', situations);


  const {ShowLevelsTitles} = useStateContext() ;
  const dispatch = useDispatch();

  const handleSaveSituation = (situation: Situation, electricChargeCount: number) => {
    const { id_situation, second_choice } = situation; // Assuming 'second_choice' is the chosen option here
    dispatch(saveChoice({
      id_situation, choice: second_choice,
      electric_charge: 0
    }, electricChargeCount));
  };

  return { ...props  , ShowLevelsTitles  ,handleSaveSituation , data} 
}


