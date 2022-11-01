import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
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
      </form>
    );
  }
}

export default WalletForm;
