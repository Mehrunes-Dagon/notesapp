import { FETCHED, UPDATED, DELETED, ADDED } from './notesActions';

const initState = {
  notes: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCHED:
      return { ...state, notes: action.notes };
    case UPDATED:
      return { ...state, notes: action.notes };
    case DELETED:
      return { ...state, notes: action.notes };
    case ADDED:
      return { ...state, notes: action.notes };
    default:
      return state;
  }
};