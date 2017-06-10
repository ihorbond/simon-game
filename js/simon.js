function SimonGame () {
  this.colors = ["red", "green", "blue", "yellow"];
  //current color seq
  this.sequence = [];
  //this will keep track of where the user is in a seq
  this.userClickCount = 0;
  //what the player's score is
  this.round = 1;
}
SimonGame.prototype.startGame = function() {
  console.log('Strating the game...');
  this.addColor();
  this.showSequence();
};

SimonGame.prototype.addColor = function() {
  var randomColor = Math.floor(Math.random() * 4);
  console.log(randomColor);
  this.sequence.push(this.colors[randomColor]);
};

SimonGame.prototype.showSequence = function() {
  var ourSequence = this.sequence;
  var i = 0;

$('#buttons-container').addClass('blocked');

  var intervalId = setInterval(function(){
   if(i >= ourSequence.length) {
    clearInterval(intervalId);
    $('#buttons-container').removeClass('blocked');
    return;
  }
$('#' + ourSequence[i]).addClass('lighton');
setTimeout(function(){
  $('button').removeClass('lighton');
}, 700);
i += 1;
  }, 1500);
};

SimonGame.prototype.nextRound = function() {
  this.addColor();
  this.showSequence();
  this.userClickCount = 0;
  $('#counter').html(this.round);
  this.round += 1;
};

SimonGame.prototype.gameOver = function() {
  this.sequence = [];
  this.userClickCount = 0;
  this.round = 1;
  $('#counter').html(0);
  this.startGame();
};
