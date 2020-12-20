import AppStyles from '../../App.styles'

export default class NavBarStyles extends AppStyles {

  public navContainer():Object {
    return ({
      height: '100px',
      width: '100%',
      backgroundColor: this.grey,
      ...this.container('row','space-between','nowrap'),
      borderBottom:`solid 1px ${this.black}`,
    })
  }
 
    static factory(bf=false): NavBarStyles {
      return new NavBarStyles(bf);
    }
  }
  