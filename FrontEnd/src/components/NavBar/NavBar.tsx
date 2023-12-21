import React from 'react';
import { useNavBar, NavBarProps } from './useNavBar';
import './NavBar.css'; // Import your CSS file

const NavBar: React.FC<NavBarProps> = (props) => {
  const {  } = useNavBar(props);

  return (
    <div className="MyNav">
      <input type="checkbox" id="MyNav-check" />
      <div className="MyNav-header">
        <div className="MyNav-title">   <a href="/"> EDF  </a> </div>
      </div>
      <div className="MyNav-btn">
        <label htmlFor="MyNav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="MyNav-links">
        <a href="/"> home</a>
        <a href="/Tests"> Tests</a>
        <a href="/About"> About</a>

      </div>
    </div>
  );
};

export default NavBar;
