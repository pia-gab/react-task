import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = (state) => ({
  title: state.app.title,
  title: state.app.subtitle,
  title: state.app.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(App);