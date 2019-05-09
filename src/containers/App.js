import { connect } from 'react-redux';

import App from '../App';
import * as actions from '../actions';

export function mapStateToProps(state) {
  const { pokemon } = state;
  return {
    pokemon,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getPokemonsList: (params) => dispatch(actions.getPokemonsList(params)),
  };
}

export function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(App);
