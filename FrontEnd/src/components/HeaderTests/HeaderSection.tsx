

import { HeaderSectionProps, useHeaderSection } from './useHeaderSection'; 
import React from 'react';
import { FaBars } from "react-icons/fa";
import "./HeaderSection.css"

const HeaderSection: React.FC<HeaderSectionProps> = (props) => {

    const {handleShowLevelsTitles} = useHeaderSection(props)

    return (

    <>
        <div className='HeaderSection'>
            <div className='SectionTitleCourse' >
              Title  
            </div>
         
            <div className='TitleSectionHead'>
                <span className='IconSection'
                 onClick={handleShowLevelsTitles}
                 >
                      <FaBars /> </span>
                <span className='TitleHeadSectiontext'> 1 - level 1  </span>


            </div>
        </div>
    </>
  
    )
}

export default HeaderSection
