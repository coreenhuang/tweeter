$(document).ready(function() {
  console.log('ready!');

  $("#tweet-text").on('input', function() {
    console.log($(this).val().length); 
  });

});