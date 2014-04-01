function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

// Player.prototype.computerRandom = function() {
//   var computerpick = Math.random();

//   if (computerpick  <= 0.2) {this.pick = 'rock'}
//   if (computerpick  > 0.2 && computerpick  <= 0.4 ) {this.pick = 'scissors'} 
//   if (computerpick  > 0.4 && computerpick  <= 0.6 ) {this.pick = 'paper'} 
//   if (computerpick  > 0.6 && computerpick  <= 0.8 ) {this.pick = 'lizard'} 
//   if (computerpick  > 0.8) {this.pick = 'spock'} 
  
// };

// var choices {'rock', 'paper','scissors','lizard', 'spock'}

// choices[Math.floor(Math.random() * choices.length)]

Player.prototype.computerRandom = function() {
	var array = ['rock', 'lizard', 'paper', 'scissors', 'spock' ]
  
  var randomIndex = Math.floor(Math.random() * 5 );
  var randomElement = array[randomIndex]
  
  return randomElement
};