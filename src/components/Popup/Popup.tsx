import React from "react";
import { useDispatch } from "react-redux";
import { setPopup } from "../../store/ducks/popup/actions";
import PopupStyles from "./Popup.styles";

interface PopupProps {
  message: string;
  visibile: boolean;
}

const Home: React.FC<PopupProps> = ({ message, visibile }: PopupProps) => {
  const CSS = PopupStyles.factory();
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(setPopup({ message: "", visibile: false }));
  };

  return (
    <div>
      <div style={CSS.PopupContainer(visibile)}>
        <div style={CSS.PopupBox()}>
          <div
            style={CSS.container("row-reverse", "start")}
            onClick={closePopup}
      
          >
            <div style={CSS.PopupExit()}>x</div>
          </div>
          <div style={{ margin: "15px", ...CSS.container() }}>{message}</div>
        </div>
      </div>
      <div style={CSS.Fading(visibile) as React.CSSProperties}></div>
    </div>
  );
};

export default Home;
