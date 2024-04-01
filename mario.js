var mario = document.getElementById("mario");
var pipe = document.getElementById("pipe");
var mushroom = document.getElementById("mushroom");
var scoreDisplay = document.getElementById("score");
var backgroundMusic = document.getElementById("background-music");
var jumpSound = document.getElementById("jump-sound");
var startBtn = document.getElementById("start-btn");
// var settingBtn = document.getElementById("settings-btn");
var gameContainer = document.getElementById("game-container");
// var leaderboard= document.getElementById("leaderboard-btn");
var leaderboardBtn = document.getElementById("leaderboard-btn");

startBtn.addEventListener("click", function () {

    backgroundMusic.play();
    
    startBtn.style.display = "none";
    gameContainer.style.display = "block";

    startGame();
});
leaderboardBtn.addEventListener("click", function () {
   
    window.location.href = "leaderboard.html";
});
// leaderboardBtn.addEventListener("click", function () {
//   
//     // backgroundMusic.play();
//     
//     startBtn.style.display = "none";
//     gameContainer.style.display = "block";

//     startGame();
// });

function startGame() {
    var marioJumping = false;
    var marioMovingRight = false;
    var marioMovingLeft = false;
    var obstacles = [pipe, mushroom];
    var coins = [];
    var gameScore = 0;
    var gameContainerWidth = gameContainer.offsetWidth;
    var marioPosition = 50;

    function jump() {
        if (!marioJumping) {
            marioJumping = true;
            jumpSound.play(); 

            var startPos = 32;
            var endPos = 350;
            var speed = 5;

            var jumpInterval = setInterval(function () {
                if (startPos < endPos) {
                    startPos += speed;
                    mario.style.bottom = startPos + "px";
                } else {
                    clearInterval(jumpInterval);
                    fall();
                }
            }, 20);
        }
    }
  
    function generateObstacles(obstacleElement) {
        setInterval(function () {
            var newObstacle = obstacleElement.cloneNode(true);
            newObstacle.style.display = "block";
            gameContainer.appendChild(newObstacle);
            moveObstacle(newObstacle);
        }, 3000); // 3000 milliseconds for slower obstacles)
    }

    function fall() {
        var startPos = 150;
        var endPos = 32;
        var speed = 8;

        var fallInterval = setInterval(function () {
            if (startPos > endPos) {
                startPos -= speed;
                mario.style.bottom = startPos + "px";
            } else {
                clearInterval(fallInterval);
                marioJumping = false;
            }
        }, 20);
    }

    function moveMario(direction) {
        var proposedPosition = marioPosition + (direction === "right" ? 20 : -20);
        var maxMarioPosition = gameContainerWidth - mario.offsetWidth;
        if (proposedPosition >= 0 && proposedPosition <= maxMarioPosition) {
            marioPosition = proposedPosition;
            mario.style.left = marioPosition + "px";
            if (direction === "right") {
                mario.classList.remove("flipped");
            } else {
                mario.classList.add("flipped");
            }
        }
    }

    function checkCollision(obstaclePos) {
        return obstaclePos < marioPosition + 100 && obstaclePos > marioPosition;
    }

    // function moveObstacle(obstacle) {
    //     var obstaclePos = gameContainerWidth;
    //     obstacle.style.left = obstaclePos + "px"; // set initial position

    //     var obstacleTimer = setInterval(function () {
    //         if (obstaclePos < -60) {
    //             obstacle.style.display = "none";
    //             obstaclePos = gameContainerWidth;
    //             setTimeout(() => {
    //                 obstacle.style.display = "block";
    //             }, 100);
    //             gameScore++;
    //             scoreDisplay.innerText = gameScore;
    //         } else if (checkCollision(obstaclePos) && marioJumping) {
    //             obstaclePos -= 10; // increase speed
    //         } else if (checkCollision(obstaclePos) && !marioJumping) {
    //             clearInterval(obstacleTimer);
    //             endGame();
    //         } else {
    //             obstaclePos -= 10; // increase speed
    //         }

    //         obstacle.style.left = obstaclePos + "px";
    //     }, Math.random() * (200 - 50) + 50);
    // }
    function moveObstacle(obstacle) {
    var obstaclePos = gameContainerWidth;
    obstacle.style.left = obstaclePos + "px"; 

    var obstacleTimer = setInterval(function () {
        if (obstaclePos < -60) {
            obstacle.style.display = "none";
            obstaclePos = gameContainerWidth;
            setTimeout(() => {
                obstacle.style.display = "block";
            }, 100);
            gameScore++;
            scoreDisplay.innerText = gameScore;
        } else if (checkCollision(obstaclePos) && marioJumping) {
            obstaclePos -= 5; 
        } else if (checkCollision(obstaclePos) && !marioJumping) {
            clearInterval(obstacleTimer);
            endGame();
        } else {
            obstaclePos -= 5; 
        }

        obstacle.style.left = obstaclePos + "px";
    }, Math.random() * (200 - 50) + 50);
}


    // generateObstacles(pipe);

    // generateObstacles(mushroom);

    function moveCoin(coin) {
        var coinPos = gameContainerWidth;
        coin.style.left = coinPos + "px";

        var coinTimer = setInterval(function () {
            if (coinPos < -60) {
                coin.style.display = "none";
                coinPos = gameContainerWidth;
                setTimeout(() => {
                    coin.style.display = "block";
                }, 100);
            } else if (checkCollision(coinPos)) {
                coin.style.display = "none";
                coinPos = gameContainerWidth;
                setTimeout(() => {
                    coin.style.display = "block";
                }, 100);
                gameScore += 10; // score when Mario collects a coin
                scoreDisplay.innerText = gameScore;
            } else {
                coinPos -= 10;
            }

            coin.style.left = coinPos + "px";
        }, Math.random() * (200 - 50) + 50);
    }

    function endGame() {
        scoreDisplay.innerText = "Game Over! Score: " + gameScore;
        obstacles.forEach(function (obstacle) {
            obstacle.style.animationPlayState = "paused";
        });
        coins.forEach(function (coin) {
            coin.style.animationPlayState = "paused";
        });
        if (confirm("Game Over!")) {
            location.reload();
        } else {
            location.reload();
        }
    }

    window.addEventListener("keydown", function (event) {
        switch (event.key) {
            case " ":
                jump();
                break;
            case "ArrowRight":
                marioMovingRight = true;
                break;
            case "ArrowLeft":
                marioMovingLeft = true;
                break;
        }
    });

    window.addEventListener("keyup", function (event) {
        switch (event.key) {
            case "ArrowRight":
                marioMovingRight = false;
                break;
            case "ArrowLeft":
                marioMovingLeft = false;
                break;
        }
    });

    setInterval(function () {
        if (marioMovingRight) {
            moveMario("right");
        } else if (marioMovingLeft) {
            moveMario("left");
        }
    }, 100);

    obstacles.forEach(function (obstacle, index) {
        setTimeout(function () {
            obstacle.style.display = "block";
            moveObstacle(obstacle);
        }, index * 4000); 
    });

    
    for (var i = 0; i < 5; i++) { 
        var coin = document.createElement("div");
        coin.className = "coin";
        coin.style.bottom = "32px"; 
        gameContainer.appendChild(coin);
        coins.push(coin);
        moveCoin(coin);
    }
}


