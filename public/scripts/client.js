/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  const createTweetElement = function(tweetData) {

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
        <p>${tweetData.created_at}</p>
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

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  renderTweets(data);

});
