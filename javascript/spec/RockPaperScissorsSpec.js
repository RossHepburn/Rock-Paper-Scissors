describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {

    player1 = new Player('Ross');
    player2 = new Player('Alex');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        // expect(game.winnerMessage()).toBe('Rock crushes scissors');

      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
        expect(game.winnerMessage()).toBe('rock crushes lizard');

      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
        expect(game.winnerMessage()).toBe('paper covers rock');

      });

      it('should lose to spock', function() {

        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
        expect(game.winnerMessage()).toBe('spock vaporizes rock');

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        expect(game.winnerMessage()).toBe('paper covers rock');

      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
        expect(game.winnerMessage()).toBe('paper disproves spock');

      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
        expect(game.winnerMessage()).toBe('scissors cut paper');


      });

      it('should lose to lizard', function() {

        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
        expect(game.winnerMessage()).toBe('lizard eats paper');

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
        expect(game.winnerMessage()).toBe('scissors cut paper');

      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
        expect(game.winnerMessage()).toBe('scissors decapitate lizard')

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
        expect(game.winnerMessage()).toBe('rock breaks scissors');

      });

      it('should lose to spock', function() {

        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
        expect(game.winnerMessage()).toBe('spock smashes scissors');

      });
    });
  });
  
  describe('winning message', function() {
    
    describe('rock when wins', function(){

      it('against scissors', function() {
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winnerMessage()).toBe('rock breaks scissors');
      })
    })
  })

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors', 'lizard', 'spock'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });
        expect(drawGameResults).toEqual([null, null, null, null, null]);
      });
    });
  });
});