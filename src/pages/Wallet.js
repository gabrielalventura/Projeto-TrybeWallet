import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { actionFetch } from '../redux/actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionFetch());
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <WalletForm />
      </>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Wallet);
