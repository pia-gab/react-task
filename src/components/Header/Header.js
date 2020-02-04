import React from 'react';
import styles from './Header.scss';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class Header extends React.Component {
  static propTypes ={
    MenuIcon: this.propTypes.node,
    toHome: this.propTypes.string,
    homeURL: this.propTypes.string,
    toInfo: this.propTypes.string,
    InfoURL: this.propTypes.string,
    toFAQ: this.propTypes.string,
    FAQURL: this.propTypes.string,
  }
  static defaultProps={
    MenuIcon: settings.navMenu.MenuIcon,
    toHome: settings.navMenu.toHome,
    homeURL: settings.navMenu.homeURL,
    toInfo: settings.navMenu.toInfo,
    InfoURL: settings.navMenu.InfoURL,
    toFAQ: settings.navMenu.toFAQ,
    FAQURL: settings.navMenu.FAQURL,
  }
  render(){
    const{MenuIcon, toHome, homeURL, toInfo, InfoURL, toFAQ, FAQURL} = this.props;
    return(
      <header>
        <Container>
          <div className={styles.wrapper}>
            <Link to ={toHome} className={styles.logo}>
              <Icon name={MenuIcon}/>
            </Link>
            <nav>
              <NavLink exact to={toHome} activeClassName='active'>{ReactHtmlParser(homeURL)}></NavLink>
              <NavLink exact to={toInfo} activeClassName='active'>{ReactHtmlParser(InfoURL)}></NavLink>
              <NavLink exact to={toFAQ} activeClassName='active'>{ReactHtmlParser(FAQURL)}></NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
export default Header;