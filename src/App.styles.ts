export default class AppStyles {
  // mutable colors
  public green: string = "#007f56";
  public grey: string = "#f2f2f2";

  //static colors
  public white: string = "white";
  public black: string = "#868686";
  public orange: string = "#fe9481";
  public yellow: string = "#fcda92";
  public purple: string = "#9c8cb9";

  constructor(bf: boolean) {
    if (bf) {
      this.green = "red";
      this.grey = "black";
     
      this.black = "red"
    }
  }

  public font: string = '"Opera Sans",Helvetica,sans-serif,arial,';

  public text(
    size: number = 1,
    colour: string = this.black,
    align: string = "center",
    thick: string = "normal"
  ): Object {
    return {
      fontFamily: this.font,
      fontSize: `${size * 14}px`,
      textAlign: align,
      color: colour,
      fontWeight: thick,
    };
  }

  public container(
    direction: string = "row",
    justify = "center",
    wrap = "wrap"
  ): Object {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: justify,
      flexWrap: wrap,
      flexDirection: direction,
    };
  }

  public page(): Object {
    return {
      minHeight: "80vh",
      width: "100%",
      backgroundColor: this.grey,
    };
  }

  static factory(bf = false): AppStyles {
    return new AppStyles(bf);
  }
}
