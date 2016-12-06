

    var containerWidth = $('#ballContainer').width()
    var containerHeight = $('#ballContainer').height() + 30
    var ballSpeed = 30
    var $timer = $('#timer')
    var createBeachBallInterval = 1000
    var currentPlayerScore = 0
    var Player1ScoreFinal = 0
    var Player2ScoreFinal = 0
    var currentPlayerIndex = 0
    var startTime = 30
    var player = ["Player1", "Player2", "No one"]
    var $manipulateBallCreator
    var manipulatetimer
    var replayButton


    $('.start').click($createBeachBall)
    $('.start').click(gameCountDown)
    $('.start').click(hideThis)
    $('.ballContainer').on('click', ".ball", function () {
              add1ToScore()
      })

    $('.ballContainer').on('click', ".ball", function () {
      $(this).remove()
    })
    $('.ballContainer').on('click', ".ball", updateScore)
    $('.ballContainer').on('click', ".ball", updateScore)
    $('.reset').hide()
    $('.reset').on('click', function() {
 document.location.reload(true);
});



  function recordFinalScore1() {
      if ($timer.html() == 0) {
        Player1ScoreFinal = currentPlayerScore
      }
    }


  function recordFinalScore2() {
      if ($timer.html() == 0) {
        Player2ScoreFinal = currentPlayerScore
      }
    }


            function updateScore() {
              $("#scoreboard").html(currentPlayerScore)
            }


      function $createBeachBall () {
            $manipulateBallCreator = setInterval(function() {
            new BeachBall()
            }, createBeachBallInterval)
                                    }




function BeachBall() {
                    var self = this
                    var ax = 0
                    var vx = 10
                    var vy = 0
                    var ay = 2
                    //need to replace genRandomNum with a function that starts at a certian size and gets smaller
                    var $newBall = $('<div><img src="http://www.pngall.com/wp-content/uploads/2016/06/Beach-Ball-PNG-Image.png"></div>').css(
                    {
                      height: '100px',
                      width: '100px',
                      borderRadius: "50%",
                      //we can keep this for now but would like two or more colors in each ball
                      backgroundImage: getRandomColor(),
                      position: 'absolute',

                    }).addClass('ball').attr('id','ball')

                //replace this line with a switch that has multiple positions for divs that are tbc so you can have it start from different places
                $('#ballContainer').append($newBall)

                this.$ball = $('.ball').last()

                this.updateBall = function() {
                  var ballCurrentX = this.$ball.position().left
                  var ballCurrentY = this.$ball.position().top

                  if (ballCurrentX >= containerWidth
                      || ballCurrentX < 0) {
                      vx = vx * -1
                  }
                  if (ballCurrentY >= containerHeight) {
                    vy = vy * -1
                    if (Math.abs(vy) <= 30) {
                      this.$ball.remove()
                    }
                  }

                  vx = vx + ax
                  vy = vy + ay

                  var newX = ballCurrentX + vx
                  var newY = ballCurrentY + vy
                  this.$ball.css('left', newX  + "px")
                  this.$ball.css('top', newY + "px")
                }

                setInterval(function() {
                  self.updateBall()
                }, ballSpeed)
                              }



                                      function genRandomNum(min, max) {
                                        return Math.round((Math.random() * (max - min)) + min)
                                      }



              function getRandomColor() {
                var options = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9']
                var result = '#'
                for (var i = 0; i < 6; i++) {
                  result += options[genRandomNum(0, (options.length - 1))]
                }
                  return result
              }



                              function gameCountDown()
                              {

                              manipulatetimer = setInterval(function()
                               {
                                  if ($timer.html() > 0 && (currentPlayerIndex == 0))
                                    {
                                      $timer.text($timer.html() -1)
                                    }

                                    else if (($timer.html() == 0) && (currentPlayerIndex == 0))
                                        { recordFinalScore1()
                                          $('.player1Score').html('Player 1: ' + Player1ScoreFinal)
                                          $timer.html(startTime)
                                          alert('SWITCH TO PLAYER 2')
                                          $('.ballContainer').empty()
                                          $('#scoreboard').html('0')
                                          currentPlayerScore = 0
                                          currentPlayerIndex = 1
                                        }

                                    else if (($timer.html() > 0) && (currentPlayerIndex == 1))
                                        { $timer.text($timer.html() -1)
                                        }
                                    else if (($timer.html() == 0) && (currentPlayerIndex == 1))
                                    {
                                      recordFinalScore2()
                                      $('#player2Score').html('Player 2: ' + Player2ScoreFinal)
                                      $('.ballContainer').empty()
                                      $('.reset').show()
                                      $timer.html(startTime)
                                              if (Player1ScoreFinal > Player2ScoreFinal)
                                                  { clearInterval($manipulateBallCreator)
                                                    // $('.ballContainer').empty()
                                                    new createEndPromt(0)
                                                    clearInterval(manipulatetimer)
                                                  }
                                              else if (Player1ScoreFinal < Player2ScoreFinal)
                                                  { clearInterval($manipulateBallCreator)
                                                    // $('.ballContainer').empty()
                                                      new createEndPromt(1)
                                                    clearInterval(manipulatetimer)
                                                  }
                                              else
                                                  { clearInterval($manipulateBallCreator)
                                                    // $('.ballContainer').empty()
                                                      new createEndPromt(2)
                                                    clearInterval(manipulatetimer)
                                                  }
                                    }
                              }, 1000)

                              //this ends the funciton
                            }


            function createEndPromt(evt, evt2)
                {
                  $replayButton = $('<button>Replay</button>')
                  .css({
                    height: '50px',
                    width: '75px',
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    color: 'red',
                      })
                  .addClass('replay')
                  .attr('id','replay')

                  var $ok = $('<button>OK</button>')
                  .css({
                    height: '50px',
                    width: '75px',
                    position: 'absolute',
                    top: '75%',
                    left: '25%',
                    color: 'blue',
                      })
                  .addClass('ok')
                  .attr('id','ok')

                  var outcome = [$replayButton, $ok]

                  var $endPromt = $('<div></div>').css({
                    height: '150px',
                    width: '400px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    background: 'grey',
                    fontSize: '40px'
                  })
                  .addClass('endPromt')
                  .attr('id','endPromt')
                  .html('Winner is: ' + player[evt])

                  $('#ballContainer').append($endPromt)
                  $('#endPromt').append(outcome[evt2])
                }


                  function hideThis() {
                    $(this).hide()
                  }

              function add1ToScore() {
                currentPlayerScore = currentPlayerScore + 1
              }
