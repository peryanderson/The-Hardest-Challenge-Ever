// Global constants:
var PLAYGROUND_WIDTH    = 900;
var PLAYGROUND_HEIGHT    = 500;
var REFRESH_RATE        = 30;


// --------------------------------------------------------------------
// --                      the main declaration:                     --
// --------------------------------------------------------------------

$(function(){
    var background1 = new $.gameQuery.Animation({
        imageURL: "images/metal.png"});

    // Initialize the game:
    $("#playground").playground({
        height: PLAYGROUND_HEIGHT,
        width: PLAYGROUND_WIDTH,
        keyTracker: true});

    // Initialize the background
$("#playground").playground({height: PLAYGROUND_HEIGHT, width: PLAYGROUND_WIDTH})
          .addGroup("background", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT}).end()
              .addSprite("background1", {animation: background1,
                                   width: PLAYGROUND_WIDTH,
                                   height: PLAYGROUND_HEIGHT})
          .addGroup("player", {width: 890, height: 390})
          .addGroup("enemies", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT}).end()
          .addGroup("playerShotsLayer",{width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT}).end()
          .addGroup("enemiesShotsLayer",{width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT});






    //initialize the start button
    $("#startbutton").click(function(){
        $.playground().startGame(function(){
            $("#welcomeScreen").remove();
        });
    });

});
