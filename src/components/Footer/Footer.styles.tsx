import AppStyles from '../../App.styles'

export default class FooterStyles extends AppStyles {

  public footerContainer():Object {
    return ({
      minHeight: '100px',
      width: '100%',
      backgroundColor: this.grey,
      ...this.container('row','space-between', 'nowrap'),
      borderBottom:`solid 1px ${this.black}`,
    })
  }
 
    static factory(bf=false): FooterStyles {
      return new FooterStyles(bf);
    }
  }
  