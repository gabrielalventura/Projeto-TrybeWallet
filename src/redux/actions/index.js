export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_ERROR = 'GET_ERROR';

export const requestAPI = () => ({
  type: REQUEST_API,
});

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});

export const getError = (error) => ({
  type: GET_ERROR,
  error,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestAPI());
    try {
      const url = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(url);
      const data = await response.json();
      const everyCurrencies = Object.keys(data);
      const currencies = everyCurrencies.filter((currency) => currency !== 'USDT');
      dispatch(getCurrency(currencies));
    } catch (error) {
      dispatch(getError(error));
    }
  };
}
