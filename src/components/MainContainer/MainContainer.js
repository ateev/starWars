import React, { Component } from 'react';
import { readBrowserCookie } from '../../helpers/cookieHandler.js';
import { checkCreds } from '../../actions/userActions.js';
import Login from '../login/login.js';
import PlanetsContainer from '../planetsContainer/planetsContainer';
import { getUserId } from '../../loginManager.js';
import { connect } from 'react-redux';

class MainContainer extends Component {
  loginUser = (username, password) => {
    this.context.store.dispatch(checkCreds(username, password));
  }
  render() {
    const userName = readBrowserCookie('LoggedIn username')[0];
    let appBlock;
    if(typeof userName !== 'undefined') {
      appBlock = <PlanetsContainer />;
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
