import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    return (
      <header>
        <div
          data-testid="email-field"
        >
          User:
          {' '}
          {userEmail}

          <div>
            Total:
            {' '}
            <span
              data-testid="total-field"
            >
              { expenses.length !== 0
                ? expenses.reduce((save, expense) => {
                  const getExchange = (expense.exchangeRates[expense.currency].ask);
                  const sum = (expense.value) * getExchange;
                  const saveInNumber = parseFloat(save);
                  const totalExpense = sum + saveInNumber;
                  return parseFloat(totalExpense).toFixed(2);
                }, 0) : '0,00'}
            </span>
            <span
              data-testid="header-currency-field"
            >
              BRL
            </span>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};

export default connect(mapStateToProps)(Header);
