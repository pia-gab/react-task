import {connect} from 'react-redux';
import Column from './Column.js';
import {getCardsForColumn} from '../../redux/cardRedux';
import {createActionAddCard} from '../../redux/cardRedux';

const mapStateToProps = (state, props) => ({
  columns:  getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);