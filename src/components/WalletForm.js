import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpending, getInformation } from '../redux/actions/walletActions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  handleEvent = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  cleaning = () => {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  clickEventAdd = async () => {
    const { dispatch, expenses } = this.props;
    const exchangeRates = await dispatch(getInformation());
    const condition = expenses.length > 0;

    if (condition) {
      const index = -1;
      const expense = expenses.slice(index)[0];
      const nextId = expense.id + 1;
      const addExpense = { id: nextId, ...this.state, exchangeRates };
      dispatch(addExpending(addExpense), this.cleaning());
    } else {
      const addExpense = { id: 0, ...this.state, exchangeRates };
      dispatch(addExpending(addExpense), this.cleaning());
    }
  }; // função desenvolvida com auxilio da Lígia Bicalho. (e muitos debugs);

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label
          htmlFor="expense-value"
        >
          Valor da Despesa:
          <input
            type="number"
            data-testid="value-input"
            name="value"
            placeholder="Valor"
            value={ value }
            onChange={ this.handleEvent }
          />
        </label>
        <label
          htmlFor="expense-description"
        >
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            name="description"
            placeholder="Despesa"
            value={ description }
            onChange={ this.handleEvent }
          />
        </label>
        <label
          htmlFor="currency"
        >
          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
            value={ currency }
            onChange={ this.handleEvent }
          >
            {currencies.map((coin, index) => (
              <option
                data-testid="api-input"
                key={ index }
                value={ coin }
              >
                {coin}
              </option>
            ))}
          </select>
        </label>
        <label
          htmlFor="payment-method"
        >
          Método de Pagamento:
          <select
            data-testid="method-input"
            name="method"
            id="payment"
            value={ method }
            onChange={ this.handleEvent }
          >
            <option
              value="Dinheiro"
            >
              Dinheiro
            </option>
            <option
              value="Cartão de crédito"
            >
              Cartão de crédito
            </option>
            <option
              value="Cartão de débito"
            >
              Cartão de débito
            </option>
          </select>
        </label>
        <label
          htmlFor="tag"
        >
          TAG:
          <select
            data-testid="tag-input"
            name="tag"
            id="tag"
            value={ tag }
            onChange={ this.handleEvent }
          >
            <option
              value="Alimentação"
            >
              Alimentação
            </option>
            <option
              value="Lazer"
            >
              Lazer
            </option>
            <option
              value="Trabalho"
            >
              Trabalho
            </option>
            <option
              value="Transporte"
            >
              Transporte
            </option>
            <option
              value="Saúde"
            >
              Saúde
            </option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.clickEventAdd }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
