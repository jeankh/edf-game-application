import { useTests, TestsProps } from "./useTests";
import React from "react";
import "./Tests.css";
import {
  HeaderSection,
  SideBarTests,
  LevelContent,
} from "../../components/index";

const Tests: React.FC<TestsProps> = (props) => {
  const { ShowLevelsTitles } = useTests(props);

  return (
    <>
      <HeaderSection />

      <div className="contentTests">
        {ShowLevelsTitles && (
          <>
            <div className="mySideBareTests">
              <SideBarTests />
            </div>
          </>
        )}

        <div className="levelContent">
          <LevelContent />
        </div>
      </div>
    </>
  );
};

export default Tests;
