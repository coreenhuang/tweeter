$(document).ready(function() {
  console.log('ready!');

  $("textarea").on('input', function() {

    let charTyped = $(this).val().length;

    const counter = $(this).next().children()[1];

    counter.innerHTML = 140 - charTyped;

    if (charTyped > 140) {
      $(counter).css("color", "red");
    } else {
      $(counter).css("color", "#545149");
    }

  });

});