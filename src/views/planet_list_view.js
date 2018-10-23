const PubSub = require('../helpers/pub_sub.js');

const PlanetList = function(){

};

PlanetList.prototype.bindEvents = function () {
  const selection = document.querySelector("ol")
  selection.addEventListener("click", (event) => {

  const chosenPlanet = event.target.id;
    PubSub.publish("PlanetView:planet-submitted", chosenPlanet);

    console.log(chosenPlanet);
  })
};

module.exports = PlanetList;
