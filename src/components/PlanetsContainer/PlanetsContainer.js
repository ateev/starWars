import React, { Component } from 'react';
import MaeveInput from 'maeve-input';
import { connect } from 'react-redux';
import api from '../../api.js';

class PlanetsContainer extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
    };
  }
  getPlanets = (name, id) => {
    api.getPlanetsByName(name)
      .end((err, res) => {
        if(res.body.results.length !== 0) {
          this.setState({
            planets: res.body.results,
          });
        } else {
          this.setState({
            planets: [],
          });
        }
      });
  }
  render() {
    console.log(this.state.planets);
    return (
      <div className="Planets-container">
        <MaeveInput
          id="planetsSearch"
          onValueUpdate={this.getPlanets}
          throttle={100}
        />
        {
          this.state.planets.map((planet, keyPair) =>
            <div key={keyPair} className="planet-item">{planet.name}</div>
          )
        }
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
