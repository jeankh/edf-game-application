import React from "react";
import { SideBarTestsProps, useSideBarTests } from "./useSideBarTests";
import "./SideBarTests.css";

const SideBarTests: React.FC<SideBarTestsProps> = (props) => {
  const {} = useSideBarTests(props);

  return (
    <div className="sidebarSection">
      <div
        id="Section-1"
        className="Sectiondiv Section Section-Ready Section-IsDone"
      >
        <div>
          <span className="Section-number">01</span>
          <span className="Section-title">Introduction</span>
          <span className="Section-IsDoneIcon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </span>
        </div>
        <div className="vlSection"></div>
      </div>

      <div
        id="Section-2"
        className="Sectiondiv Section Section-active Section-Ready"
      >
        <div>
          <span className="Section-number">02</span>
          <span className="Section-title">Artist Royalties</span>
        </div>
        <div className="vlSection"></div>
      </div>

      <div id="Section-3" className="Sectiondiv Section Section-NotReady">
        <div>
          <span className="Section-number">03</span>
          <span className="Section-title">The Glossary</span>
        </div>
        <div className="vlSection"></div>
      </div>

      <div id="Section-1000" className="Sectiondiv Section Section-NotReady">
        <span className="Section-number">04</span>
        <span className="Section-title">What's next</span>
        <div className="vlSection"></div>
      </div>

      <div id="Section-1001" className="Sectiondiv Section Section-NotReady">
        <span className="Section-number">05</span>
        <span className="Section-title">Certification</span>
        {/* <div className="vlSection visibility-hidden"></div> */}
      </div>
    </div>
  );
};

export default SideBarTests;
