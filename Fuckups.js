

var containerWidth = $('#ballContainer').width()
var containerHeight = $('#ballContainer').height() + 30
var ballSpeed = 50
var $timer = $('#timer')
var createBeachBallInterval = 1000
var currentPlayerScore = 0
var Player1ScoreFinal = 0
var Player2ScoreFinal = 0
var currentPlayerIndex = 0
var startTime = 7
var player = ["player1", "player2"]


//will change this to a set interval that will terminate at the end of the timer (60 sec)
$('.start').click($createBeachBall)
$('.start').click(gameCountDown)
$('.start').click(removeThis)
$('.ballContainer').on('click', ".ball", function () {
          add1ToScore()
  })

$('.ballContainer').on('click', ".ball", function () {
  $(this).remove()
})
$('.ballContainer').on('click', ".ball", updateScore)
$('.ballContainer').on('click', ".ball", updateScore)



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
        setInterval(function() {
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
                var $newBall = $('<div>').css({
                  height: '50px',
                  width: '50px',
                  borderRadius: "50%",
                  //we can keep this for now but would like two or more colors in each ball
                  background: getRandomColor(),
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



                          function gameCountDown() {

                           setInterval(function() {
                              if ($timer.html() > 0 && (currentPlayerIndex == 0)) {
                                  $timer.text($timer.html() -1)
                                }
                                else if (($timer.html() == 0) && (currentPlayerIndex == 0)) {
                                        recordFinalScore1()
                                        $('.player1Score').html('Player 1: ' + Player1ScoreFinal)
                                        $timer.html(startTime)
                                        alert('SWITCH TO PLAYER 2')
                                        $('.ballContainer').empty()
                                        $('#scoreboard').html('0')
                                        currentPlayerScore = 0
                                        currentPlayerIndex = 1
                                }
                                else if (($timer.html() > 0) && (currentPlayerIndex == 1)) {
                                          $timer.text($timer.html() -1)
                                        }
                                else if (($timer.html() == 0) && (currentPlayerIndex == 1))
                                {
                                          recordFinalScore2()
                                          $('#player2Score').html('Player 2: ' + Player2ScoreFinal)
                                          $('.ballContainer').empty()
                                          $timer.html(startTime)
                                          if (Player1ScoreFinal > player2Score) {
                                            alert('WiNNER = Player 1')
                                          }
                                          else if (Player1ScoreFinal < Player2ScoreFinal) {
                                            alert('WiNNER = Player 2')
                                          }
                                          else {
                                            alert("It's a tie")
                                          }
                                }
                                          }, 1000)
                                          }



              function removeThis() {
                this.remove()
              }

          function add1ToScore() {
            currentPlayerScore = currentPlayerScore + 1
          }


// var time = $('#mainContainer')
// var timeLimit = 60
// function gameTimer() {
//   var self2 = this
//   time = timeLimit
//   var $timer = $('<div>')
//   $timer.text("60")
//   $timer.css({
//   fontSize: '40px',
//   color: 'red'
// })
//   $timer.addClass('gameTimer')
//
//   $('#mainContainer').append($timer)


  // this.$ball = $('.ball').last()

// setInterval(timerCountDown, 1000)
//
//   function timerCountDown() {
//     $('gameTimer').text = $('gameTimer') - 1
//     }


















  // function updateBallX() {
  //   var ballCurrentX = $newBall.position().left
  //   if (ballCurrentX >= containerWidth
  //       || ballCurrentX < 0) {
  //       vx = vx * -1
  //     }
  //   vx = vx + ax
  //   var newX = ballCurrentX + vx
  //   // myBall.css('left', newX  + "px")
  //   return newX
  // }
  //
  // var moveX = setInterval(updateBallX, 20)
  //
  // function updateBallY() {
  //   var ballCurrentY = $newBall.position().top
  //   if (ballCurrentY >= containerHeight) {
  //     vy = vy * -1
  //   }
  //     if (Math.abs(vy) <= 8) {
  //       $newBall.remove()
  //     }
  //     vy = vy + ay
  //     var newY = ballCurrentY + vy
  //     // myBall.css('top', newY + "px")
  //     return newY
  // }
  //
  // var moveY = setInterval(updateBallY, 20)

        //   $newBall.animate({
        //     top: genRandomNum(100, $('#ballContainer').height()),
        //     left: genRandomNum(100, $('#ballContainer').width())
        //   }, 500, moveBall)
        // }
        //
        //
        // function moveBall() {
        //   $(this).animate({
        //     top: genRandomNum(100, $('#ballContainer').height()),
        //     left: genRandomNum(100, $('#ballContainer').width())
        //   }, 500, moveBall)
        // }

//         var x,y,vx,vy,ax,ay, diam, r
//
// function setup() {
//  x = 100
//  y = height/2
//  vx = 0
//  vy = 0
//  ax = 0//0.01
//  ay = 0.01
//  diam = 100
//  r = diam/2
// }
//
//
// function draw() {
//   image(crowdImage, 0, 0)
//   vx = vx + ax
//   vy = vy + ay
//   x = x + vx
//   y = y + vy
//
//   if (y > height) {
//     vy = vy * -1
//   }
//   if (x > width) {
//     vx = vx * -1
//   }
//
//   ellipse(x, y, diam, diam)
// }
//
// function mousePressed() {
//   console.log('clicked')
//   var d = dist(mouseX, mouseY, x, y)
//
//   if (d < r) {
//   fill('red')
//   }
//   else {
//     fill('white')
//   }
// }

          //
          //
