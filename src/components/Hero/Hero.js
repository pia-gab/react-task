import React from 'react';
import styles from './Hero.scss';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const Hero = props => {
  console.log(props);
  return(
    <header className ={styles.component}>
      <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
      <img src={props.image} className={styles.image}/>
    </header>
  );
};

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  image: PropTypes.string,
};

export default Hero;
