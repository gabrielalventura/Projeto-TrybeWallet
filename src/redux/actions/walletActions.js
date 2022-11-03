export const BEGIN_REQUEST = 'BEGIN_REQUEST';
export const MAKE_REQUEST = 'MAKE_REQUEST';
export const GET_ERROR = 'GET_ERROR';
export const ADD_EXPENDING = 'ADD_EXPENDING';
export const CHANGE_EDIT = 'CHANGE_EDIT';

export const beginRequest = () => ({
  type: BEGIN_REQUEST,
});

export const makeRequest = (payload) => ({
  type: MAKE_REQUEST,
  payload,
});

// export const getError = (error) => ({
//   type: GET_ERROR,
//   error,
// });

export const addExpending = (payload) => ({
  type: ADD_EXPENDING,
  payload,
});

export const changeEdit = (payload) => ({
  type: CHANGE_EDIT,
  payload,
});

const fetchCoinExchange = async (dispatch) => {
  try {
    dispatch(beginRequest());
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    // dispatch(error);
  }
};

export function getInformation() {
  return async (dispatch) => {
    const exchangeRates = await fetchCoinExchange(dispatch);
    return exchangeRates;
  };
}
