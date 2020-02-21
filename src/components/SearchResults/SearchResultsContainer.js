import {connect} from 'react-redux';
import {getCardsForSearch} from '../../redux/cardRedux.js';
import {changeActionSearchString} from '../../redux/searchStringRedux';
import SearchResult from './SearchResults.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});


const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(changeActionSearchString(newSearchString)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);