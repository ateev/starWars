import React, { Component } from 'react';
import { readBrowserCookie } from '../../helpers/cookieHandler.js';
import { checkCreds } from '../../actions/userActions.js';
import Login from '../Login/login.js';
import PlanetsContainer from '../PlanetsContainer/PlanetsContainer';
import { connect } from 'react-redux';

class MainContainer extends Component {
  loginUser = (username, password) => {
    this.context.store.dispatch(checkCreds(username, password));
  }
  render() {
    const userName = readBrowserCookie('LoggedIn username')[0];
    let appBlock;
    if(typeof userName !== 'undefined') {
      appBlock = <PlanetsContainer userName={userName} />;
    } else {
      appBlock = <Login submitCallback={ this.loginUser } />
    }
    return (
      <div className="main-container">
        { appBlock }
      </div>
    );
  }
}

MainContainer.contextTypes = {
  store: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(MainContainer);
