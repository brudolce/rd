import React from "react";
import FooterStyles from "./Footer.styles";
import raia from './drogaraia.png';
import drogasil from './drogasil.png'
import farmasil from './farmasil.png'
import univers from './univers.png'
import fbio from './4bio.png'
import rd from './rd-small.png'

interface FooterProps {
  theme?: boolean;
}


const Footer: React.FC<FooterProps> = ({theme}) => {
  const CSS = FooterStyles.factory(theme);



  return (
    <div style={{ backgroundColor: CSS.grey }}>
      <div style={CSS.footerContainer()}>
        <div style={CSS.text(1)}>RD 2017. Todos os direitos reservados</div>
        <div style={{...CSS.container('row','space-around'),width: "40vw"}}>
        <img src={raia} alt="drogaRaia"/>
        <img src={drogasil} alt="drogasil"/>
        <img src={farmasil} alt="farmasil"/>
        <img src={univers} alt="univers"/>
        <img src={fbio} alt="4bio"/>
        </div>
        <div>
          <img src={rd} alt="RD"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
