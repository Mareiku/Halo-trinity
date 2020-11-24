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

function scrollingPhantom() {
    backgroundPosition --;
    document.getElementById("phantom").style.backgroundPosition = backgroundPosition + "px 0px";
    setTimeout(function() {;
        scrollingPhantom();
}, 15);
}

scrollingPhantom();

function scrollingBanshee() {
    backgroundPosition --;
    document.getElementById("banshee").style.backgroundPosition = backgroundPosition + "px 0px";
    setTimeout(function() {;
        scrollingBanshee();
}, 15);
}

scrollingBanshee();


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

// function attackingBanshee() {
//     bansheePosition +=50;
//     document.getElementById("banshee").style.backgroundPosition = bansheePosition + "px ";
//     console.log("attackingBanshee");
//     setTimeout(function() {;
//         attackingBanshee();
// }, 15);
// }

// attackingBanshee();

