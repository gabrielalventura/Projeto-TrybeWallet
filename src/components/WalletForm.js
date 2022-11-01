import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label
          htmlFor="expense-value"
        >
          Valor da Despesa:
          <input
            type="number"
            data-testid="value-input"
            name="expense-value"
            placeholder="Valor Despesa"
          />
        </label>
        <label
          htmlFor="expense-description"
        >
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            name="expense-description"
            placeholder="Descrição Despesa"
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
          >
            {currencies.map((currency, index) => (
              <option
                key={ index }
                value={ currency }
              >
                {currency}
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
            name="payment-method"
            id="payment"
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
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
