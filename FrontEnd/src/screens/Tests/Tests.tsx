import { useTests, TestsProps } from "./useTests";
import React from "react";
import "./Tests.css";
import {
  HeaderSection,
  SideBarTests,
  LevelContent,
} from "../../components/index";
import Certificate from "../../components/Certificate/Certificate";

const Tests: React.FC<TestsProps> = (props) => {
  const { ShowLevelsTitles, data, situations, level } = useTests(props);

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
          {data.length + 1 === level && <Certificate situations={situations} />}
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
