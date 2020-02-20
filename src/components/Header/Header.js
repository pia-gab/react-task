import React from 'react';
import styles from './Header.scss';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Search from '../Search/Search';


class Header extends React.Component {
  static propTypes = {
    menuIcon: PropTypes.node,
    headerHome: PropTypes.string,
    homeURL: PropTypes.string,
    headerFAQ: PropTypes.string,
    faqURL: PropTypes.string,
    headerInfo: PropTypes.node,
    infoURL: PropTypes.string,
  }
  static defaultProps={
    menuIcon: settings.navMenu.menuIcon,
    headerHome: settings.navMenu.headerHome,
    homeURL: settings.navMenu.homeURL,
    headerFAQ: settings.navMenu.headerFAQ,
    faqURL: settings.navMenu.faqURL,
    infoURL: settings.navMenu.infoURL,
    headerInfo: settings.navMenu.headerInfo,
  }
  render(){
    const{menuIcon, headerHome, homeURL, faqURL, infoURL, headerInfo, headerFAQ} = this.props;
    return(
      <header>
        <Container>
          <div className={styles.wrapper}>
            <Link to ={homeURL} className={styles.logo}>
              <Icon name={menuIcon}/>
            </Link>
            <Search />
            <nav>
              <NavLink exact to={homeURL} activeClassName='active'>{ReactHtmlParser(headerHome)}</NavLink>
              <NavLink exact to={infoURL} activeClassName='active'>{ReactHtmlParser(headerInfo)}</NavLink>
              <NavLink exact to={faqURL} activeClassName='active'>{ReactHtmlParser(headerFAQ)}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
export default Header;