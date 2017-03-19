import superagent from 'superagent';

const api = {
  getUserByName(name) {
    const apiUrl = `http://swapi.co/api/people/`;
    const params = {
        search: name,
    };
    return superagent
      .get(apiUrl)
      .query(params);
  },

  getPlanetsByName(name) {
    const apiUrl = `http://swapi.co/api/planets`;
    const params = {
      search: name,
    };
    return superagent
      .get(apiUrl)
      .query(params);
  },

};

export default api;