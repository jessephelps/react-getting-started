export function getNextQuoteHasErrored(bool) {
  return {
    type: 'QUOTE_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function getNextQuoteIsLoading() {
  return {
    type: 'QUOTE_IS_LOADING',
    isLoading: true,
  };
}

export function getNextQuoteSuccess(quote) {
  return {
    type: 'QUOTE_SUCCESS',
    quote,
  };
}

export function getNextQuote() {
  return async (dispatch) => {
    dispatch(getNextQuoteIsLoading(true));

    fetch('1.json')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(quote => dispatch(getNextQuoteSuccess(quote)))
      .catch(() => dispatch(getNextQuoteHasErrored(true)));
  };
}