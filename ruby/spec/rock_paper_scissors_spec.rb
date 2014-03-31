require 'rspec'
require_relative '../lib/rock_paper_scissors'

describe 'Rock-Paper-Scissors' do

  let(:player1) { Player.new 'A' }
  let(:player2) { Player.new 'B' }
  let(:game) { Game.new player1, player2 }

  context 'winning and losing' do

    describe 'rock' do

      it 'should beat scissors' do
        player1.picks :rock and player2.picks :scissors
        expect(game.winner).to be(player1)
      end

      it 'should lose to paper' do
        player1.picks :rock and player2.picks :paper
        expect(game.winner).to be(player2)
      end

    end

    describe 'paper' do

      it 'should beat rock' do
        player1.picks :paper and player2.picks :rock
        expect(game.winner).to be(player1)
      end

      it 'should lose to scissors' do
        player1.picks :paper and player2.picks :scissors
        expect(game.winner).to be(player2)
      end

    end

    describe 'scissors' do

      it 'should beat paper' do
        player1.picks :scissors and player2.picks :paper
        expect(game.winner).to be(player1)
      end

      it 'should lose to rock' do
        player1.picks :scissors and player2.picks :rock
        expect(game.winner).to be(player2)
      end

    end

  end

  context 'draws' do

    describe 'any identical picks' do

      it 'should result in no winner' do

        draw_game_results = [:rock, :paper, :scissors].map do |x|
          player1.picks x and player2.picks x
          game.winner
        end

        expect(draw_game_results).to eq [nil, nil, nil]

      end

    end

  end

end