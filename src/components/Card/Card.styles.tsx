import AppStyles from "../../App.styles";

export default class CardStyles extends AppStyles {
  public cardContainer(): Object {
    return {
      width: "280px",
      ...this.container("column", "space-between"),
    };
  }

  public cardPicture(color: string): Object {
    return {
      backgroundColor: color,
      ...this.container("column", "center", "nowrap"),
      width: "100%",
    };
  }

  public cardPicturePicture(): Object {
    return {
      margin: "15px",
    };
  }

  public cardPictureText(): Object {
    return {
      ...this.text(1.7, this.white),
      ...this.container(),
      margin: "20px 0",
    };
  }

  public cardContent(): Object {
    return { height: "80px", padding: "5px", backgroundColor: this.white };
  }

  public cardContentButton(color:string): Object {
    return {
      ...this.text(1, this.white),
      ...this.container("column"),
      backgroundColor: color,
      margin: "5px",
      padding: "5px 5px",
      cursor: "pointer",
    };
  }
  static factory(bf=false): CardStyles {
    return new CardStyles(bf);
  }
}
