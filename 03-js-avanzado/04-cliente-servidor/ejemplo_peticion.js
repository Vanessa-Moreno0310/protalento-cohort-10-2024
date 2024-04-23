fetch(
  "https://twitter.com/i/api/graphql/cH9HZWz_EW9gnswvA4ZRiQ/CreateDraftTweet",
  {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,es;q=0.8",
      authorization:"",
      cookie:"",
      Referer: "https://twitter.com/compose/post",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: '{"variables":{"post_tweet_request":{"auto_populate_reply_metadata":false,"status":"Probando...","exclude_reply_user_ids":[],"media_ids":[]}},"queryId":"cH9HZWz_EW9gnswvA4ZRiQ"}',
    method: "POST",
  }
);
