import { LevelContentProps, useLevelContent } from "./useLevelContent";
import React from "react";
import "./LevelContent.css";
import Round from "../Round/Round";

const LevelContent: React.FC<LevelContentProps> = (props) => {
  const { data, situations, level } = useLevelContent(props);
  const situation = data[level - 1] || data[situations.length];

  return (
    <>
      <div className="MyHomeLevelContent">
        <Round situation={situation} />
      </div>
    </>
  );
};

export default LevelContent;
