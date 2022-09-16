/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const createTweetElement = function(tweetData) {

  const convertedTime = timeago.format(tweetData.created_at);

  return `
  <section class="posted-tweets">
    <header>
      <div>
        <p><img src=${tweetData.user.avatars}> ${tweetData.user.name}</p>
      </div>
      <div id="handle">
        <p>${tweetData.user.handle}</p>
      </div>
    </header>

    <article>
      <p>${tweetData.content.text}</p>
    </article>

    <footer>
      <div>
        <p>${convertedTime}</p>
      </div>
      <div>
        <i class="fa-solid fa-flag icons"></i>
        <i class="fa-solid fa-retweet icons"></i>
        <i class="fa-solid fa-heart icons"></i>
      </div>
    </footer>
  </section>
  `

  };

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      $('.tweets-container').append(createTweetElement(tweet));
    }
  };

  $('form').submit(function(event) {
    event.preventDefault();
    const textArea = $(this).children()[1];

    if (!$(textArea).val()) {
      return alert('error blank form');
    }
    
    if ($(textArea).val().length > 140) {
      return alert('error too many characters');
    }
    
    $.post("/tweets", $(this).serialize())
    .then(function() {
      $.ajax('/tweets', { method: 'GET' })
      .then(function(tweets) {
        $('.tweets-container').prepend(createTweetElement(tweets[tweets.length - 1]));
        $(textArea).val('');
        $('.counter').val(140);
      })
    })

  })

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (tweets) {
      renderTweets(tweets);
    });
  }

  loadTweets();

});
