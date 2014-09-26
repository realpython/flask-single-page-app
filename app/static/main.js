$(document).ready(function() {
  console.log("ready!");

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
        console.log(results.items[0]);
        $('#results').html('<a href="'+results.items[0].html_url+'">'+results.items[0].login+'</a><br><img src="'+results.items[0].avatar_url+'">')
        $('input').val('')
      },
      error: function(error) {
        console.log(error)
      }
    });

  });

});
