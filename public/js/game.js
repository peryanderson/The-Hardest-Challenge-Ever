// Global constants:
var PLAYGROUND_WIDTH    = 900;
var PLAYGROUND_HEIGHT    = 500;
var REFRESH_RATE        = 30;

var playerAnimation = new Array();


// --------------------------------------------------------------------
// --                      the main declaration:                     --
// --------------------------------------------------------------------

$(function(){
    var background1 = new $.gameQuery.Animation({
        imageURL: "images/metal.png"});

    playerAnimation["up"]      = new $.gameQuery.Animation({
        imageURL: "images/blue.png",
        numberOfFrame: 1,
        delta: 14,
        rate: 60,
        type: $.gameQuery.ANIMATION_HORIZONTAL});
    playerAnimation["down"]    = new $.gameQuery.Animation({
        imageURL: "images/blue.png",
        numberOfFrame: 1,
        delta: 14,
        rate: 60,
        type: $.gameQuery.ANIMATION_HORIZONTAL});
    playerAnimation["boost"]   = new $.gameQuery.Animation({
        imageURL: "images/blue.png" ,
        numberOfFrame: 1,
        delta: 14,
        rate: 60,
        type: $.gameQuery.ANIMATION_VERTICAL});
    playerAnimation["booster"] = new $.gameQuery.Animation({
        imageURL: "images/blue.png",
        numberOfFrame: 1,
        delta: 14,
        rate: 60,
        type: $.gameQuery.ANIMATION_VERTICAL});

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
          .addGroup("actors", {width: PLAYGROUND_WIDTH, height: PLAYGROUND_HEIGHT})
          .addGroup("player", {posx: 300, posy: 50, width: 100, height: 26})
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
