class Game

  PAIRS = {
    rock:     { beats: :scissors },
    paper:    { beats: :rock },
    scissors: { beats: :paper }
  }.freeze

  def initialize(player1, player2)
    @player1, @player2 = player1, player2
  end

  def winner
    return nil if same_pick?

    if PAIRS[@player1.pick][:beats] == @player2.pick
      @player1
    else
      @player2
    end
  end

  private

  def same_pick?
    @player1.pick == @player2.pick
  end

end

class Player

  attr_reader :pick, :name

  def initialize(name)
    @name = name
  end

  def picks(pick)
    @pick = pick
  end

end