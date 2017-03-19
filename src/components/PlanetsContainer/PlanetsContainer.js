import React, { Component } from 'react';
import MaeveInput from 'maeve-input';
import { connect } from 'react-redux';

class PlanetsContainer extends Component {
  handleChange = (id, value) => {
    console.log(id + ' ' + value);
  }
  getPlanets = () => {
  }
  render() {
    return (
      <div className="Planets-container">
        <MaeveInput
          id="planetsSearch"
          onValueUpdate={this.handleChange}
          throttle={50}
        />
      </div>
    );
  }
}

PlanetsContainer.contextTypes = {
  store: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(PlanetsContainer);
