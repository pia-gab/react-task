import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = {
    titleH3: PropTypes.node,
    icon: PropTypes.node,
    cards: PropTypes.array,
  }
  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.columns,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }
  render() {
    return (
      <section className ={styles.component}>
        <h3 className={styles.title}>{this.props.titleH3}
        <span className={styles.icon}>
          <Icon name={icon}/>
        </span></h3>
        <div>
        {this.state.cards.map(cardProps => (
          <Card key={key} {...cardProps} />
        ))}
      </div>
        <div className={styles.creator}>
          <Creator text={settings.creator.cardText} action={addCard}/>
        </div>
      </section>
    )
  }
  }
  
  export default Column;