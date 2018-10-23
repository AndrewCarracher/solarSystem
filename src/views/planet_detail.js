const PubSub = require('../helpers/pub_sub.js');

const PlanetDetail = function(){
}

PlanetDetail.prototype.bindEvents = function () {
  PubSub.subscribe("Planet:final-planet", (event) => {

    const planet = event.detail;
    this.displayResult(planet);
  });
};

PlanetDetail.prototype.displayResult = function (planet) {
    const result = document.querySelector(".planet-details");
    result.textContent = `Name: ${planet.name}, Day: ${planet.day} Earth Days, Orbit: ${planet.orbit} Earth Days, Surface Area: ${planet.surfaceArea} Earths, Volume: ${planet.volume} Earths, Gravity: ${planet.gravity}g, Moons: ${planet.moons}`;

};

module.exports = PlanetDetail;
