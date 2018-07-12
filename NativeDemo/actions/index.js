export function getNextQuote(id) {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:5000/${id}.json`);
    const responseJson = await response.json();
    dispatch(getNextQuoteSuccess(responseJson));
  };
}

export function getNextQuoteSuccess(quoteJson) {
  return {
    type: 'QUOTE_SUCCESS',
    quote: quoteJson.quote,
    quoteIndex: quoteJson.quoteIndex,
  };
}
