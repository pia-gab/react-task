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
    addCard: PropTypes.func,
    name: PropTypes.node,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  render() {
    console.log(this.props)
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className ={styles.component}>
        <h3 className={styles.title}>{this.props.titleH3}
          <span className={styles.icon}>
            <Icon name={this.props.name}/>;
          </span></h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {<div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
          </div>}
      </section>
    );
  }
}
export default Column;