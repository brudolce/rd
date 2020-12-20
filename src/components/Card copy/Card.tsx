import React from "react";
import CardStyles from "./CardStyles";

interface CardProps {
  text: any;
  picTitle?: string;
  color: string;
  img: any;
  actionTitle: string;
  action?: () => void;
  theme?:boolean
}

const Home: React.FC<CardProps> = ({
  action,
  text,
  color,
  img,
  actionTitle,
  picTitle,theme
}: CardProps) => {
  const CSS = CardStyles.factory(theme);

  return (
    <div style={CSS.cardContainer()}>
      <div style={CSS.cardPicture(color)}>
        <img style={CSS.cardPicturePicture()} src={img} alt="" />
        <div style={CSS.cardPictureText()}>{picTitle}</div>
      </div>
      <div style={CSS.cardContent()}>
        <div
          style={CSS.text(1, CSS.black, "justify")}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div style={CSS.container("row-reverse", "start")}>
          <div onClick={action} style={CSS.cardContentButton(color)}>
            {actionTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
