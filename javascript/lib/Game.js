function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
		rock: 		['scissors', 'lizard', 'breaks', 'crushes'],
		scissors: ['paper', 'lizard', 'cut', 'decapitate'],
		paper: 		['rock', 'spock', 'covers', 'disproves'],
		lizard:   ['paper', 'spock', 'eats', 'poisons'],
		spock: 		['scissors', 'rock', 'smashes', 'vaporizes']

};

Game.prototype.winner = function() {
	
	if(this._isSamePick()) return null; 

 	if (this.PAIRS[this.player1.pick].indexOf(this.player2.pick) != -1 ){
 		this.loser = this.player2;
 		return this.player1;
 }
 	else {
 		this.loser = this.player1;
 		return this.player2;
 }
}

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
}

Game.prototype.winnerMessage = function() {
	if(this.winner() === null) return 'Draw!';
	
	var verbIndex = this.PAIRS[this.winner().pick].indexOf(this.loser.pick) + 2;
	return this.winner().pick + ' ' + this.PAIRS[this.winner().pick][verbIndex] + ' ' + this.loser.pick;
};


