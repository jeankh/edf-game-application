import { useTests, TestsProps } from "./useTests";
import React from "react";
import "./Tests.css";
import {
  HeaderSection,
  SideBarTests,
  LevelContent,
} from "../../components/index";

const Tests: React.FC<TestsProps> = (props) => {
  const { ShowLevelsTitles, handleSaveSituation, data, situations, level } =
    useTests(props);

  return (
    <>
      <HeaderSection data={data} />

      <div className="contentTests">
        {ShowLevelsTitles && (
          <>
            <div className="mySideBareTests">
              <SideBarTests data={data} />
            </div>
          </>
        )}

        <div className="levelContent">
          {data.length + 1 === level && <> certificate</>}
          {data.length + 1 !== level && (
            <>
              <LevelContent data={data} situations={situations} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Tests;
