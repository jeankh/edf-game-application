import { useTests, TestsProps } from "./useTests";
import React from "react";
import "./Tests.css";
import {
  HeaderSection,
  SideBarTests,
  LevelContent,
} from "../../components/index";

const Tests: React.FC<TestsProps> = (props) => {
  const { ShowLevelsTitles, handleSaveSituation, data } = useTests(props);

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
          <button
            onClick={() =>
              handleSaveSituation(data[0], data[0].first_choice_electric_charge)
            }
          >
            test
          </button>

          <button
            onClick={() =>
              handleSaveSituation(
                data[1],
                data[1].second_choice_electric_charge
              )
            }
          >
            test
          </button>
          <LevelContent />
        </div>
      </div>
    </>
  );
};

export default Tests;
