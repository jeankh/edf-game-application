import { HeaderSectionProps, useHeaderSection } from "./useHeaderSection";
import React from "react";
import { FaBars } from "react-icons/fa";
import "./HeaderSection.css";

const HeaderSection: React.FC<HeaderSectionProps> = (props) => {
  const { handleShowLevelsTitles, data, situations, level } =
    useHeaderSection(props);

  return (
    <>
      <div className="HeaderSection">
        <div className="SectionTitleCourse">
          {data.length + 1 === level && <> certificate</>}
          {data.length + 1 !== level && (
            <>{data[level - 1].category || data[0].category}</>
          )}
        </div>

        <div className="TitleSectionHead">
          <span className="IconSection" onClick={handleShowLevelsTitles}>
            <FaBars />{" "}
          </span>
          <span className="TitleHeadSectiontext">
            {" "}
            {!(data.length + 1 === level) && (
              <>
                {level} - level {level}{" "}
              </>
            )}
            {data.length + 1 === level && <>{level} - total Electric Charge</>}
          </span>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
