import { GET_CURRENCY, GET_ERROR } from '../actions';
import { ADD_EXPENDING, CHANGE_EDIT } from '../actions/walletActions';

const initialState = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_ERROR:
    return {
      ...state,
      error,
    };
  case ADD_EXPENDING:
    return ({
      ...state,
      expenses: [...state.expenses,
        action.payload],
    });
  case CHANGE_EDIT:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
