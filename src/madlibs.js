import { FIELD_NAMES } from "./constants";

// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = "MADLIBS.SUBMIT_FIELD";

export const UPDATE_ESSAY = "MADLIBS.UPDATE_ESSAY";
export const INCREMENT_COUNTER = "MADLIBS.INCREMENT_COUNTER";
export const START_OVER = "MADLIBS.START_OVER";

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.music,
    FIELD_NAMES.bar,
  ],

  fieldAnswers: {},
  essayText: {},

  counter: 1,
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FIELD: {
      const { fieldName, answer, staticStatement } = action.payload;

      return {
        ...state,
        fieldAnswers: { ...state.fieldAnswers, [fieldName]: answer },
        essayText: { ...state.essayText, [staticStatement]: answer },
      };
    }

    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case START_OVER: {
      return {
        state,
      };
    }

    default:
      return state;
  }
}

// Action creators
// ----------------------------------------------------------------------------

export function submitField({ id, answer, statement }) {
  return { type: SUBMIT_FIELD, payload: { fieldName: id, answer, statement } };
}

export function increment() {
  return { type: INCREMENT_COUNTER };
}
