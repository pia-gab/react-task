import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const Info = ({titleText, imageUrl, headerInfo, infoContent}) => (
  <Container>
    <Hero titleText={titleText} image={imageUrl} />
    <h2>{ReactHtmlParser(headerInfo)}</h2>
    <p>{ReactHtmlParser(infoContent)}</p>
  </Container>
);

Info.propTypes = {
  titleText: PropTypes.node,
  imageUrl: PropTypes.node,
  infoContent: PropTypes.string,
  headerInfo: PropTypes.string,
};

Info.defaultProps = {
  titleText: settings.InfoContent.title,
  imageUrl: settings.InfoContent.image,
  infoContent: settings.InfoContent.title,
  headerInfo: settings.navMenu.headerInfo.text,
};

export default Info;