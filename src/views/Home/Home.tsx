import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { setTheme } from "../../store/ducks/theme/actions";
import { setPopup } from "../../store/ducks/popup/actions";
import AppStyles from "../../App.styles";
import Card from "../../components/Card/Card";
import dkt from "./desktop.png";
import tbt from "./tablet.png";
import mbl from "./mobile.png";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [over, setOver] = useState(false);
  const store = useSelector((reduxState: ApplicationState) => reduxState);
  const theme = store.theme.Theme;


  const CSS = AppStyles.factory(theme);

  const data = [
    {
      color: CSS.orange,
      img: dkt,
      actionTitle: "Leia mais...",
      text:
        "Quando pressionado o botão <b>Leia mais...</b> o restante da informaçãodeverá aparecer em scroll down.",
      picTitle: "Site responsivo DESKTOP",
      action: () => {
        setOver(!over);
      },
      over:true
    },
    {
      color: CSS.yellow,
      img: tbt,
      actionTitle: "Leia mais...",
      text:
        "Quando pressionado o botão <b>Leia mais...</b> informação deverá aparecer completa em um popup na tela.",
      picTitle: "Site responsivo TABLET",
      action: () => {
        dispatch(
          setPopup({
            message:
              "Quando pressionado o botão Leia mais... informação deverá aparecer completa em um popup na tela.",
            visibile: true,
          })
        );
      },
    },
    {
      color: CSS.purple,
      img: mbl,
      actionTitle: "alterar tema",
      text:
        "Quando pressionado o botão <b>alterar tema</b> modifique o tema do site para blackfriday a seu gosto.",
      picTitle: "Site responsivo MOBILE",
      action: () => {
        dispatch(setTheme(!theme));
      },
    },
  ];

  return (
    <div
      style={{
        ...CSS.page(),
        backgroundImage: 'url("../bg.jpg")',
        ...CSS.container(),
      }}
    >
      

      <div style={{ ...CSS.container("row", "space-around"), width: "100%" }}>
        {data.map((el, i) => (
          <div key={i} style={{ margin: "20px", maxWidth: "1200px" }}>
            <Card
              key={i + "c"}
              picTitle={el.picTitle}
              color={el.color}
              img={el.img}
              actionTitle={el.actionTitle}
              text={el.text}
              action={el.action}
              theme={theme}
              over={el.over && over}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
