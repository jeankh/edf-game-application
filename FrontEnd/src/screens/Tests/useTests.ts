export interface TestsProps {}

import { useStateContext } from "../../contexts/ContextProvider";
import { useDispatch } from 'react-redux';
import { saveChoice } from '../../reducers/Ducks/situationDukck';
import {Situation} from '../../types/models/Situation'
import {RootState} from '../../reducers/rootReducer'
import {data} from '../../assets/dummyData'

import { useSelector } from 'react-redux';

export const useTests= (props: TestsProps) => {
// id !Data then get 
// get data  
  const situations = useSelector((state: RootState) => state.situations);

  // Now 'situations' holds the data from the Redux store
  console.log('Situation data:', situations);


  const {ShowLevelsTitles , handleLevel, level} = useStateContext() ;
  const dispatch = useDispatch();

  console.log(level)

  // const handleSaveSituation = (situation: Situation, electricChargeCount: number) => {
  //   const { id_situation, second_choice } = situation; 
  //   dispatch(saveChoice({
  //     id_situation, choice: second_choice,
  //     electric_charge: 0 , next : false
  //   }, electricChargeCount)); 
  // };

  return { ...props  , ShowLevelsTitles   , data , situations , handleLevel, level } 
}


