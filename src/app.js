const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetDetail = require('./views/planet_detail.js');
const PlanetList = require('./views/planet_list_view');


document.addEventListener('DOMContentLoaded', () => {
  const planets = new PlanetList();
  planets.bindEvents();

  const solarSystem = new SolarSystem(planetsData);
  solarSystem.bindEvents();

  const finalPlanet = new PlanetDetail();
  finalPlanet.bindEvents();

});
