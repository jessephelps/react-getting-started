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

export function getNextQuoteSuccess(quoteJson) {
  console.log(quoteJson);
  return {
    type: 'QUOTE_SUCCESS',
    quote: quoteJson.quote,
    quoteIndex: quoteJson.quoteIndex,
  };
}

export function getNextQuote(id) {
  return async (dispatch) => {
    dispatch(getNextQuoteIsLoading(true));

    fetch(`${id}.json`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(quoteJson => dispatch(getNextQuoteSuccess(quoteJson)))
      .catch(() => dispatch(getNextQuoteHasErrored(true)));
  };
}