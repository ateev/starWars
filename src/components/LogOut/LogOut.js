import React, { Component } from 'react';
import { logoutUser } from '../../actions/userActions.js';
import { connect } from 'react-redux';
import './LogOut.css';

export class LogOut extends Component {
  logout = () => {
    this.context.store.dispatch(logoutUser());
  }
  render() {
    const isLoggedIn = this.props.user.name !== undefined;
    return (
        <div className="Log-out">
            { isLoggedIn === true ?
            <a onClick={this.logout} >Logout</a>
            : null
            }
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
