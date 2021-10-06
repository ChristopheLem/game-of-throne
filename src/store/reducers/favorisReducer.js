import * as ACTION_TYPES from "../actions/action_type";

export const initialState = {
  books: [],
};

export const favorisReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case ACTION_TYPES.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book !== action.payload),
      };
    default:
      return state;
  }
};
