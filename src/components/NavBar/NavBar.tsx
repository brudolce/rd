import React from "react";
import NavBarStyles from "./NavBar.styles";
import rd from "./rd.png";


interface NavBarProps {
  theme?: boolean;
}


const NavBar: React.FC<NavBarProps> = ({theme}) => {
  const CSS = NavBarStyles.factory(theme);

 
  return (
    <div style={{ backgroundColor:CSS.grey}}>

      <div style={CSS.navContainer()}>
        <div>
          <img src={rd} alt="" />
        </div>
        <div
          style={
            {
              ...CSS.container("row", "space-around"),
              ...CSS.text(1.3, CSS.green),
              width: "40vw",
            } as React.CSSProperties
          }
          >
          <div>HTML5</div>
          <div>CSS3</div>
          <div>JAVASCRIPT</div>
          <div>REACT</div>
          <div>REDUX</div>
        </div>
      </div>
          </div>
    
  );
};

export default NavBar;
