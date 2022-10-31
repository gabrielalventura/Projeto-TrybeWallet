import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { validUser } from '../redux/actions/userActions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  validEmail = () => {
    const { email } = this.state;
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  validPassword = () => {
    const minPassword = 5;
    const { password } = this.state;
    return password.length > minPassword;
  };

  validateEntry = () => {
    if (this.validEmail() && this.validPassword()) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  handleEvent = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateEntry());
  };

  redirectClick = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(validUser(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <section>
          <input
            type="email"
            name="email"
            onChange={ this.handleEvent }
            placeholder="email"
            data-testid="email-input"
            value={ email }
          />
          <input
            type="password"
            name="password"
            onChange={ this.handleEvent }
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            minLength={ 6 }
          />
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ this.redirectClick }
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(null)(Login);
