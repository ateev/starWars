import React, { Component } from 'react';
import MaeveInput from 'maeve-input';
import { connect } from 'react-redux';
import { readBrowserCookie, setBrowserCookie } from '../../helpers/cookieHandler.js';
import api from '../../api.js';
import './PlanetsContainer.css';

class PlanetsContainer extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
    };
  }
  overRateLimit() {
    const userName = this.props.userName;
    if(userName !== 'Luke Skywalker') {
      const currentAPICalls = parseInt(readBrowserCookie('api-count')[0]) || 0;
      if(currentAPICalls >= 15) {
        return true;
      } else {
        currentAPICalls += 1;
        setBrowserCookie('api-count', currentAPICalls, (1/(24*60)) )
        console.log(currentAPICalls);
        return false;
      }
    } else {
      return false;
    }
  }
  getPlanets = (name, id) => {
    if(this.overRateLimit() === false) {
      if(name.length === 0 ) {
        this.setState({
          planets: [],
          error: "",
        });
      } else {
        api.getPlanetsByName(name, this.props.userName)
        .end((err, res) => {
          if(res.body.results.length !== 0) {
            this.setState({
              planets: res.body.results,
              error: "",
            });
          } else {
            this.setState({
              planets: [],
              error: "",
            });
          }
        });
      }
    } else {
      this.setState({
        error: "Requests per minute exceeded",
      })
    }
  }
  getRelativeHeights() {
    const planets = this.state.planets;
    let totalPopulation = 0;
    planets.map((planet) => {
      if(planet.population !== 'unknown') {
        totalPopulation += parseInt(planet.population);
      }
    });
    planets.map((planet) => {
      if(planet.population !== 'unknown') {
        planet.percentHeight = (parseInt(planet.population) / totalPopulation) * 100;
        planet.percentHeight = planet.percentHeight < 1 ? 1 : planet.percentHeight;
      } else {
        planet.percentHeight = 1;
      }
      console.log(planet.percentHeight);
    });
  }
  render() {
    this.getRelativeHeights();
    return (
      <div className="Planets-container">
        <MaeveInput
          id="planetsSearch"
          onValueUpdate={this.getPlanets}
          throttle={40}
          placeholder="Planet name"
        />
        <div className="error">
          {this.state.error}
        </div>
        <div className="planets-div">
        {
          this.state.planets.map((planet, keyPair) =>
            <div
              style={
                {
                  height: `${planet.percentHeight}%`,
                }
              }
              key={keyPair}
              className="planet-item">
                <div className="planet-name">
                  {planet.name} - {planet.population} Population.
                </div>
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
