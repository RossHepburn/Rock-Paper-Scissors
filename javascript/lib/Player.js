function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

Player.prototype.computerRandom = function() {
	var choices = ['rock', 'lizard', 'paper', 'scissors', 'spock' ]
  return this.randomElement = choices[Math.floor(Math.random() * choices.length)]
};