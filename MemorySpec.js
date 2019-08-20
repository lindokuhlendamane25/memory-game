
describe("game onload", function(){
    it ("should load all the cards", function(){
      expect(card).toBeDefined();
  });
    it ("should unlock the board after loading the game", function(){
        expect(gameGrid).toBe(false);
    });

  });
    
  describe("resetGameBoard", function(){
    it ("should have all the cards unflipped", function(){
        expect(lockBoard,hasFlippedCard).toBe(false);
    });
    it ("should have the board unset", function(){
    [hasFlippedCard, lockBoard] = [false, false];
        expect(lockBoard).toBe(false);
    });

    
    it ("should have back card undefined", function(){
        expect(secondGuess).toBe(undefined);
    });
    it ("frontCard should be undefined", function(){
        expect(firstGuess).toBe(defined);
    })
  });
 
