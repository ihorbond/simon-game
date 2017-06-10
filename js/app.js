var myGame = new SimonGame();

console.log(myGame);

$(document).ready(function(){
  myGame.startGame();
});

$(document).ready(function(){
  $('button').click(function(){
    var theOneJustClicked = $(this).prop('id');
    var currentSequenceColor = myGame.sequence[myGame.userClickCount];
    if (currentSequenceColor === theOneJustClicked) {
      myGame.userClickCount += 1;
      if (myGame.userClickCount >= myGame.sequence.length) {
        $('body').addClass('sequence-entered');

        setTimeout(function(){
            $('body').removeClass('sequence-entered');
            myGame.nextRound();
        },2000);
      }
    }
    else {
      $('body').addClass('game-over');

      setTimeout(function(){
          $('body').removeClass('game-over');
          myGame.gameOver();
      },2000);
    }
  });
});
