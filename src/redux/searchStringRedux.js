// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countVisibleCards = ({cards}) => cards.lenght;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE_STRING = createActionName('CHANGE_STRING');
// action creators
export const changeActionSearchString = payload => ({ payload, type: CHANGE_STRING });
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_STRING:
      return action.payload;
    default:
      return statePart;
  }
}

