const initialState = {
  quote: '',
  quoteIndex: 0,
};

export const quotes = (state = initialState, action) => {
  switch (action.type) {
    case 'QUOTE_SUCCESS':
      return {
        ...state,
        quoteIndex: action.quoteIndex,
        quote: action.quote,
      };
    default:
      return state;
  }
};

export default quotes;