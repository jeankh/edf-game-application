import React from "react";
import { SideBarTestsProps, useSideBarTests } from "./useSideBarTests";
import "./SideBarTests.css";

const SideBarTests: React.FC<SideBarTestsProps> = (props) => {
  const { data, situations, level } = useSideBarTests(props);

  const isSectionActive = (id: number) => {
    return situations.some((situation) => situation.id_situation === id);
  };

  const isSectionDone = (id: number) => {
    return situations.some(
      (situation) =>
        situation.id_situation === id &&
        data.find((item) => item.id_situation === id)?.right_answer ===
          situation.choice
    );
  };

  const renderSections = () => {
    return data.map((section) => {
      const sectionId = `Section-${section.id_situation}`;
      const isActive = isSectionActive(section.id_situation);
      const isDone = isSectionDone(section.id_situation);

      let sectionClasses = "Sectiondiv Section";
      if (isActive) sectionClasses += " Section-active";
      if (isDone) sectionClasses += " Section-IsDone";
      else sectionClasses += " Section-NotReady";

      return (
        <div key={sectionId} id={sectionId} className={sectionClasses}>
          <div>
            <span className="Section-number" id="Section-number">
              {section.id_situation.toString().padStart(2, "0")}
            </span>
            <span className="Section-title">Test {section.category}</span>
            {isDone && (
              <span className="Section-IsDoneIcon">
                {/* Your SVG icon for a done section */}
              </span>
            )}
          </div>
          <div className="vlSection"></div>
        </div>
      );
    });
  };

  const isCertificationActive = () => {
    if (data.length + 1 === level) {
      return true;
    }
    return false; // Return false if situations array is empty
  };

  return (
    <div className="sidebarSection">
      {renderSections()}
      <div
        id="Section-Certification"
        className={`Sectiondiv Section ${
          isCertificationActive() ? "Section-active" : "Section-NotReady"
        }`}
      >
        <span className="Section-number">0{data.length + 1}</span>
        <span className="Section-title">Total Electric Charge</span>
        <div className="vlSection " style={{ visibility: "hidden" }}></div>
      </div>
    </div>
  );
};

export default SideBarTests;
