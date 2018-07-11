const initialState = {
  quote: '',
  quoteIndex: 0,
  isLoading: false,
  hasErrored: false,
};

export const quotes = (state = initialState, action) => {
  switch (action.type) {
    case 'QUOTE_SUCCESS':
      return {
        ...state,
        quoteIndex: action.quoteIndex,
        quote: action.quote,
      };
    case 'QUOTE_IS_LOADING':
      return {
        ...state
      };
    case 'QUOTE_HAS_ERRORED':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default quotes;