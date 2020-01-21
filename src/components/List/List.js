import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    img: PropTypes.string,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        {<Hero img={this.props.img} titleText={this.props.title} />}
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleH3={'elo'}/>
          <Column titleH3={'pomelo'}/>
          <Column titleH3={'i w ogole'}/>
        </div>
      </section>
    )
  }
}

export default List;
