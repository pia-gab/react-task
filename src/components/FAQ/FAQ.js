import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';


const FAQ = ({titleText, imageUrl, faqContent}) => (
  <Container>
    <Hero titleText={titleText} image={imageUrl} />
    <p>{ReactHtmlParser(faqContent)}</p>
  </Container>
);

FAQ.propTypes = {
  titleText: PropTypes.node,
  imageUrl: PropTypes.node,
  faqContent: PropTypes.string,
};

FAQ.defaultProps = {
  titleText: settings.FAQContent.title,
  imageUrl: settings.FAQContent.image,
  faqContent: settings.FAQContent.text,
};
  

export default FAQ;