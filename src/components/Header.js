import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <div
          data-testid="email-field"
        >
          User:
          {' '}
          {userEmail}

          <p
            data-testid="total-field"
          >
            Total:
            {' '}
            0
            {' '}
            <span
              data-testid="header-currency-field"
            >
              BRL
            </span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
