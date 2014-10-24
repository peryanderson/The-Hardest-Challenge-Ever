$(document).ready(function() {
  $('h2 a').hover(function(){
  var troll_message = "You think you troll hard?"
  $( this ).text(troll_message);
},
function(){
  var troll_message = "I troll harder"
  $( this ).text(troll_message);
}
)
});



