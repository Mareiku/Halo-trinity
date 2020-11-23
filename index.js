var backgroundPosition = 0;



function scrollingBackground() {
    backgroundPosition --;
    document.getElementById("game").style.backgroundPosition = backgroundPosition + "px 0px";
    setTimeout(function() {;
        scrollingBackground();
}, 15);
}

scrollingBackground();

var hornetPosition = 320;

function movingHornetUp() {
    hornetPosition -=7.5;
    document.getElementById("hornet").style.top = hornetPosition + "px ";
    console.log("movingHornetUp");
}

movingHornetUp();

function movingHornetDown() {
    hornetPosition +=7.5;
    document.getElementById("hornet").style.top = hornetPosition + "px ";
    console.log("movingHornetDown");
}

movingHornetDown();

document.body.onkeydown = function(e){
    if(e.keyCode === 40) {
        movingHornetDown();
    } else if (e.keyCode === 38) {
        movingHornetUp();
    }
};

