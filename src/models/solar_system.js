const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  this.findPlanet();
}

SolarSystem.prototype.findPlanet = function () {
  PubSub.subscribe("PlanetView:planet-submitted", (event) => {

    const planetName = event.detail;

    var result = "";

    for(i = 0; i < this.planets.length; i++){

      if(this.planets[i].name == planetName){
        result = this.planets[i];
      }
    }
    console.log(result);
    PubSub.publish("Planet:final-planet", result);
  })


};


module.exports = SolarSystem;
