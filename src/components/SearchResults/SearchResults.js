import React from 'react';
import styles from '../Container/Container.scss';
import Container from '../Container/Container';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

class SearchResults extends React.Component {
  
  static propTypes = {
    cards: PropTypes.array,
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps  = () => {
    console.log(this.props, 'searchres1');
  }
  render() {
    const {cards} = this.props;
    //console.log(this.props.cards, 'searchres');
    
    return (
      <Container>
        <section className ={styles.component}>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}
export default SearchResults;