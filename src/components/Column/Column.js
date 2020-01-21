import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
      titleH3: PropTypes.node,
    }
    render() {
      return (
        <section className ={styles.component}>
          <h3 className={styles.title}>{this.props.titleH3}</h3>
        </section>
      )
    }
  }
  
  export default Column;