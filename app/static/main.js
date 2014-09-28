$(document).ready(function() {
  console.log("ready!");

  $('#try-again').hide();

  // on form submission ...
  $('form').on('submit', function() {

    console.log("the form has beeen submitted");

    // grab values
    valueOne = $('input[name="location"]').val();
    valueTwo = $('input[name="language"]').val();
    console.log(valueOne, valueTwo)

    $.ajax({
      type: "POST",
      url: "/",
      data : { 'first': valueOne, 'second': valueTwo },
      success: function(results) {
        if (results.items.length > 0) {
          $('input').hide();
          $('#try-again').show();
          var randNum = Math.floor(Math.random() * Object.keys(results.items).length)
          console.log(results.items[randNum]);
          $('#results').html('<a href="'+results.items[randNum].html_url+'">'+results.items[randNum].login+
              '</a><br><img src="'+results.items[randNum].avatar_url+'" class="avatar">')
          // $('input').val('')
        } else {
          $('#results').html('Something went terribly wrong! Please try again.')
        }
      },
      error: function(error) {
        console.log(error)
      }
    });

  });

  $('#try-again').on('click', function(){
    $('input').val('').show();
    $('#try-again').hide();
    $('#results').html('');
  });

});
