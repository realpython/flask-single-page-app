$(document).ready(function() {
  console.log("ready!");

  // on form submission ...
  $('form').on('submit', function() {

    console.log("the form has beeen submitted");

    // grab values
    valueOne = $('input[name="number-one"]').val();
    valueTwo = $('input[name="number-two"]').val();
    console.log(valueOne, valueTwo)

    $.ajax({
      type: "POST",
      url: "/",
      data : { 'first': valueOne, 'second': valueTwo },
      success: function(results) {
        console.log(results);
        $('#results').html(results.total)
        $('input').val('')
      },
      error: function(error) {
        console.log(error)
      }
    });

  });

});
