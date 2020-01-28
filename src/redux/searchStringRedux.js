import shortid from 'shortid';
// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE_STRING = createActionName('CHANGE_STRING');
// action creators
export const changeActionSearchString = payload => ({ payload: { ...payload, id: shortid.generate() }, type: CHANGE_STRING });
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_STRING:
    default:
      return statePart;
  }
}

