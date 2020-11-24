var gameTheme = new Audio();

gameTheme.src = "/music/gameTheme.mp3";

// gameTheme.play();

var backgroundPosition = 0;

// will move the background at a decent rate

function scrollingBackground() {
    backgroundPosition --;
    document.getElementById("game").style.backgroundPosition = backgroundPosition + "px 0px";
    setTimeout(function() {;
        scrollingBackground();
}, 15);
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
        movingPhantomLeft();
}, 10);
}

movingPhantomLeft();

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
}, 1);
}

movingBansheeLeft();


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

