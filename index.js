//menu theme music

var menuTheme = new Audio();

menuTheme.src ="/music/menuTheme.mp3";

menuTheme.play();

//game theme music
var gameTheme = new Audio();

gameTheme.src = "/music/gameTheme.mp3";

//gameTheme.play();

var backgroundPosition = 0;

//menu buttons

function startGame() {
    menuTheme.pause();
    var game = document.getElementById("game");
    var menu = document.getElementById("start-screen");
    menu.style.display = "none";
    game.style.display = "block";
    gameTheme.play();
}

// will move the background at a decent rate

function scrollingBackground() {
    backgroundPosition --;
    document.getElementById("game").style.backgroundPosition = backgroundPosition + "px 0px";
    setTimeout(function() {;
        scrollingBackground();
}, 10);
}

scrollingBackground();

//Making the Phantom attack the Hornet!

function scrollingPhantom() {
    backgroundPosition --;
    setTimeout(function() {;
        scrollingPhantom();
}, 12);
}

scrollingPhantom();

var phantomPosition = 600;

function movingPhantomLeft() {
    phantomPosition --;
    document.getElementById("phantom").style.left = phantomPosition + "px ";
    console.log("movingPhantomLeft");
    setTimeout(function() {;
        randomHeightPhantom();
        movingPhantomLeft();
}, 5990);
}

movingPhantomLeft();

function randomHeightPhantom() {
    let phantom = document.getElementById("phantom");
    let height = Math.floor( Math.random() * 425 );
    phantom.style.bottom = height +"px"
}

//Making the Banshee attack the Hornet!

function scrollingBanshee() {
    backgroundPosition --;
    setTimeout(function() {;
        scrollingBanshee();
}, 12);
}

scrollingBanshee();

var bansheePosition = 600;

function movingBansheeLeft() {
    bansheePosition --;
    document.getElementById("banshee").style.left = bansheePosition + "px ";
    console.log("movingBansheeLeft");
    setTimeout(function() {;
        movingBansheeLeft();
        randomHeightBanshee();
}, 4990);
}

movingBansheeLeft();

function randomHeightBanshee() {
    let banshee = document.getElementById("banshee");
    let height = Math.floor( Math.random() * 650 );
    if (height<=450){
        banshee.style.bottom = "450px"
    } else {
        banshee.style.bottom = height +"px";
    }
    let banshee2 = document.getElementById("banshee2");
    let height2 = Math.floor( Math.random() * 425 );
    if (height2<=350){
        banshee2.style.bottom = "350px"
    } else {
        banshee2.style.bottom = height2 +"px";
    }
    let banshee3 = document.getElementById("banshee3");
    let height3 = Math.floor( Math.random() * 325 );
        banshee3.style.bottom = height3 +"px";
}

//Making the Elite attack the Hornet!

function scrollingElite() {
    backgroundPosition --;
    setTimeout(function() {;
        scrollingElite();
}, 12);
}

scrollingElite();

var elitePosition = 600;

function movingEliteLeft() {
    elitePosition --;
    document.getElementById("elite").style.left = elitePosition + "px ";
    console.log("movingEliteLeft");
    setTimeout(function() {;
        randomHeightElite()
        movingEliteLeft();
}, 2990);
}

movingEliteLeft();

function randomHeightElite() {
    let elite = document.getElementById("elite");
    let height = Math.floor( Math.random() * 650 );
    if (height<=350){
        elite.style.bottom = "350px"
    } else {
        elite.style.bottom = height +"px";
    }
    let elite2 = document.getElementById("elite2");
    let height2 = Math.floor( Math.random() * 310 );
    elite2.style.bottom = height2 +"px";
}

//will offer the possibility to go up!

var hornetPosition = 320;

function movingHornetUp() {
    hornetPosition -=7.5;
    document.getElementById("hornet").style.top = hornetPosition + "px ";
    console.log("movingHornetUp");
}

movingHornetUp();

//will offer the possibility to go down!

function movingHornetDown() {
    hornetPosition +=7.5;
    document.getElementById("hornet").style.top = hornetPosition + "px ";
    console.log("movingHornetDown");
}

movingHornetDown();

//will offer the possibility to move the Hornet!

document.body.onkeydown = function(e){
    if(e.keyCode === 40) {
        movingHornetDown();
    } else if (e.keyCode === 38) {
        movingHornetUp();
    }
};

