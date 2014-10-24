$(document).ready(function() {
   $(".create_event").on('submit', function(event){
    event.preventDefault();
    var new_event = $(this).serialize();
    console.log(new_event)
    $.ajax({
      url: '/events',
      type: 'post',
      data: new_event,
      success: function(response){
        $("ul").last().append(response);
      }
    });
  });
});
