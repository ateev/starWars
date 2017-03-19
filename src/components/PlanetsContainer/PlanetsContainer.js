import React, { Component } from 'react';
import MaeveInput from 'maeve-input';
import { connect } from 'react-redux';
import api from '../../api.js';
import './PlanetsContainer.css';

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
  getRelativeWidths() {
    const planets = this.state.planets;
    let totalPopulation = 0;
    planets.map((planet) => {
      if(planet.population !== 'unknown') {
        totalPopulation += parseInt(planet.population);
      }
    });
    planets.map((planet) => {
      if(planet.population !== 'unknown') {
        planet.percentWidth = (parseInt(planet.population) / totalPopulation) * 100;
      } else {
        planet.percentWidth = 0;
      }
    });
  }
  render() {
    this.getRelativeWidths();
    return (
      <div className="Planets-container">
        <MaeveInput
          id="planetsSearch"
          onValueUpdate={this.getPlanets}
          throttle={100}
        />
        <div className="planets-div">
        {
          this.state.planets.map((planet, keyPair) =>
            <div
              style={
                {
                  height: `${planet.percentWidth}%`,
                }
              }
              key={keyPair}
              className="planet-item">
                {planet.name}
              </div>
          )
        }
        </div>
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
