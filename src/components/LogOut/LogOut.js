import React, { Component } from 'react';
import { deleteCookie } from '../../helpers/cookieHandler.js';
import { logoutUser } from '../../actions/userActions.js';
import { connect } from 'react-redux';
import './LogOut.css';

export class LogOut extends Component {
  logout = () => {
    this.context.store.dispatch(logoutUser());
  }
  render() {
    return (
        <div className="Log-out">
            <a onClick={this.logout} >Logout</a>
        </div>
    );
  }
}

LogOut.contextTypes = {
  store: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(LogOut);
