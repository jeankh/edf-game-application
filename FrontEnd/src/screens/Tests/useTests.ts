export interface TestsProps {}

import { useStateContext } from "../../contexts/ContextProvider";
import { useDispatch } from 'react-redux';

import {RootState} from '../../reducers/rootReducer'
import {data} from '../../assets/dummyData'

import { useSelector } from 'react-redux';
import { getData } from "../../services/sections/getSituation";
import { useEffect, useState } from "react";

export const useTests= (props: TestsProps) => {
// id !Data then get 
// get data  

const [MyData, setMyData] = useState(data);
useEffect(() => {
  async function fetchData() {
    try {
      // Adjust your-endpoint
      const data = await getData('situations'); 
      console.log('Data:', data);
      setMyData(data);
      // Handle the received data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();
}, [MyData,data]); // Empty dependency array to run this effect only once


  const situations = useSelector((state: RootState) => state.situations);

  // Now 'situations' holds the data from the Redux store
  console.log('Situation data:', situations);


  const {ShowLevelsTitles , handleLevel, level} = useStateContext() ;
  const dispatch = useDispatch();

  console.log(level)



  return { ...props, ShowLevelsTitles, data: MyData, situations, handleLevel, level };

}


