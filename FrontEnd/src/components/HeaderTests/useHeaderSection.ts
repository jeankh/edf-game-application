import {Situation} from '../../types/models/Situation'
import { useStateContext } from '../../contexts/ContextProvider';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';

export interface HeaderSectionProps {
  data: Situation[]; // Assuming 'data' is an array of Situation objects
}


export const useHeaderSection = (props: HeaderSectionProps) => {
  const { handleShowLevelsTitles, ShowLevelsTitles , handleLevel, level } = useStateContext();
  const situations = useSelector((state: RootState) => state.situations);
  

  
  // console.log(situations);

  
 
  
  return { ...props, handleShowLevelsTitles, situations  , handleLevel, level };
}
