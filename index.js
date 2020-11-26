// Score value during the game

var scorecontainer = document.getElementById("score")

// Menu theme music

var menuTheme = new Audio();
menuTheme.src ="./music/menuTheme.mp3";

menuTheme.play();

var gameOverTheme = new Audio();
gameOverTheme.src ="./music/gameOverTheme.mp3";

// Game theme music

var gameTheme = new Audio();
gameTheme.src = "./music/gameTheme.mp3";


var oof = new Audio();
oof.src = "./music/hit.mp3";

var backgroundPosition = 0;

var phantom = document.getElementsByClassName("phantom");
var banshee = document.getElementsByClassName("banshee");
var elite = document.getElementsByClassName("elite");
var ennemies = document.getElementsByClassName("ennemies");
var game = document.getElementById("game");
var menu = document.getElementById("start-screen");
var MenuText = document.getElementById("history");
var score = 0;

var hornetPosition = 320;

// Menu buttons

function startGame() {
    score = 0;
    hornetPosition = 320;
    document.getElementById("hornet").style.top = hornetPosition + "px ";
    backgroundPosition = 0;

    scorecontainer.innerHTML = score;
    menuTheme.pause();
    
    menu.style.display = "none";
    game.style.display = "block";
    gameTheme.play();

    randomPhantomPlacement();
    randomBansheePlacement();
    randomElitePlacement();
}

function gameover() {
    gameTheme.pause();
    gameOverTheme.play();
    oof.play();

    game.style.display = "none";
    menu.style.display = "block";

    MenuText.innerHTML = "<h1>MISSION FAILED</h1><br>You've failed your mission soldier...<br>Your score was " + score + ", but that's not what matters the most, right?"
}


// Will offer the possibility to go up!


function movingHornetUp() {
    if (hornetPosition >= 40) {
        hornetPosition -=20;
        document.getElementById("hornet").style.top = hornetPosition + "px ";
        //console.log("movingHornetUp");
    }
}


// Will offer the possibility to go down!

function movingHornetDown() {
    if (hornetPosition <= 600) {
        hornetPosition +=20;
        document.getElementById("hornet").style.top = hornetPosition + "px ";
        //console.log("movingHornetDown");
    }
}

// Will offer the possibility to move the Hornet!

document.body.onkeydown = function(e){
    if(e.keyCode === 40) {
        movingHornetDown();
    } else if (e.keyCode === 38) {
        movingHornetUp();
    }
};

var bgmove = setInterval(() => {
    backgroundPosition -= 3;
    document.getElementById("game").style.backgroundPosition = backgroundPosition + "px 0px";
}, 15);

// Banshees
for (var i = 0; i < banshee.length; i++) {
    // When Covies gets out of the screen
    banshee[i].addEventListener("animationiteration", function(){
        // The vehicle passes
        score++;
        scorecontainer.innerHTML = score;

        // Put banshee between top and bottom of screen (661), substract banshee height (37 px) to ensure banshee is not off-screen
        // Math abs makes negative numbers positive, so no off-screen to the top
        var random = Math.abs(Math.floor(Math.random()*661) - 37);
        this.style.top = random + "px";

        // We relaunch a new bansuee at a random interval
        this.style.animationPlayState = "paused";
        var self = this;
        setTimeout(function() {;
            self.style.animationPlayState = "running";
        }, Math.random()*2000);
    });
}

// Elites, see banshee, just adapted
for (var i = 0; i < elite.length; i++) {
    elite[i].addEventListener("animationiteration", function(){
        score += 5;
        scorecontainer.innerHTML = score;

        var random = Math.abs(Math.floor(Math.random()*661) - 40);
        this.style.top = random + "px";

        this.style.animationPlayState = "paused";
        var self = this;
        setTimeout(function() {;
            self.style.animationPlayState = "running";
        }, Math.random()*2000);
    });
}


// Phantom, see banshee, just adapted
for (var i = 0; i < phantom.length; i++) {
    phantom[i].addEventListener("animationiteration", function(){
        score += 10;
        scorecontainer.innerHTML = score;

        var random = Math.abs(Math.floor(Math.random()*661) - 119);
        this.style.top = random + "px";

        this.style.animationPlayState = "paused";
        var self = this;
        setTimeout(function() {;
            self.style.animationPlayState = "running";
        }, Math.random()*2000);
    });
}

function randomBansheePlacement() {
    for (var i = 0; i < banshee.length; i++) {
        var random = Math.abs(Math.floor(Math.random()*661) - 119);
        banshee[i].style.top = random + "px";
        var self = banshee[i];
        setTimeout(function() {;
            self.style.animationPlayState = "running";
        }, Math.random()*2000);
    };
}

function randomElitePlacement() {
    for (var i = 0; i < elite.length; i++) {
        var random = Math.abs(Math.floor(Math.random()*661) - 119);
        elite[i].style.top = random + "px";
        var self = elite[i];
        setTimeout(function() {;
            self.style.animationPlayState = "running";
        }, Math.random()*2000);
    };
}

function randomPhantomPlacement() {
    for (var i = 0; i < phantom.length; i++) {
        var random = Math.abs(Math.floor(Math.random()*661) - 119);
        phantom[i].style.top = random + "px";
        var self = phantom[i];
        setTimeout(function() {;
            self.style.animationPlayState = "running";
        }, Math.random()*2000);
    };
}


/* HERE WE MAKE COLLISIONS */

// Every 20 ms we check if there is a collision
setInterval(function() {
    var hornetBottom = hornetPosition + 40;
    var hornetTop = hornetPosition;

    for (let i = 0; i < ennemies.length; i++) {
        var ennemy = ennemies[i];
        // Here the Y pos is defined randomly by the JS but is constant so we know it
        var enPosY = parseInt(ennemy.style.top);
        var enHeight = parseInt(window.getComputedStyle(ennemy).getPropertyValue("height"));
        var enPosYbottom = enPosY + enHeight;
        // Here the X position changes because of the CSS animation so we compute the X position
        var enPosX = parseInt(window.getComputedStyle(ennemy).getPropertyValue("left"));
        
        // An ennemy is at the sampe X as the falcon
        if (enPosX <= 80) {
            if (
                (hornetTop > enPosY) && (hornetTop < enPosYbottom) // Le hornet touche par le bas
                ||
                (hornetBottom > enPosY) && (hornetBottom < enPosYbottom) // Le hornet touche par le bas*/
            ) {
                gameover();
            }
        }
    }
}, 20);
