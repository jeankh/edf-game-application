//useSideBarTests

import { useSelector } from "react-redux";
import { Situation } from "../../types/models/Situation";
import { RootState } from "../../reducers/rootReducer";
import { useStateContext } from "../../contexts/ContextProvider";

export interface SideBarTestsProps {
  data: Situation[]; 
}


export const useSideBarTests = (props: SideBarTestsProps) => {

const situations = useSelector((state: RootState) => state.situations);

const {ShowLevelsTitles , handleLevel, level} = useStateContext() ;



  return { ...props ,situations , level  }
}
