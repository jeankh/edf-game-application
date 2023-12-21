export interface HeaderSectionProps {}
import React, { useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
export const useHeaderSection = (props: HeaderSectionProps) => {

  const { handleShowLevelsTitles , ShowLevelsTitles } = useStateContext();
//   console.log(ShowLevelsTitles)
    
  return { ...props  , handleShowLevelsTitles   }
}
