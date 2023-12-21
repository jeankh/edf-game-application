import { LevelContentProps, useLevelContent } from "./useLevelContent";
import React from "react";
import "./LevelContent.css";
import Round from "../Round";

const LevelContent: React.FC<LevelContentProps> = (props) => {
  const { situation } = useLevelContent(props);

  return (
    <>
      <div className="MyHomeLevelContent">
        <Round situation={situation} />
      </div>
    </>
  );
};

export default LevelContent;
