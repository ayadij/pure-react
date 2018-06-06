import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './Tweet';

function TweetList({ tweets }) {
  return (
    <div>
      {tweets.map(tweet => (
        <div key={tweet.id} style={{ marginBottom: 20 }}>
          <Tweet tweet={tweet} />
        </div>
      ))}
    </div>
  );
}

var tweets = [
  {
    id: 0,
    message: 'This was a triumph',
    gravatar: 'bb2b92acde44d370853bd3fdbfca6fda',
    author: {
      handle: 'dceddia',
      name: 'Dave Ceddia'
    },
    likes: 5,
    retweets: 2,
    timestamp: '2016-08-02 10:00:00'
  },
  {
    id: 1,
    message: "I'm making a note here",
    gravatar: 'bb2b92acde44d370853bd3fdbfca6fda',
    author: {
      handle: 'dceddia',
      name: 'Dave Ceddia'
    },
    likes: 5,
    retweets: 2,
    timestamp: '2016-08-02 10:00:04'
  },
  {
    id: 2,
    message: 'HUGE SUCCESS',
    gravatar: 'bb2b92acde44d370853bd3fdbfca6fda',
    author: {
      handle: 'dceddia',
      name: 'Dave Ceddia'
    },
    likes: 5,
    retweets: 2,
    timestamp: '2016-08-02 10:00:05'
  },
  {
    id: 3,
    message: "It's hard to overstate my satisfaction.",
    gravatar: 'bb2b92acde44d370853bd3fdbfca6fda',
    author: {
      handle: 'dceddia',
      name: 'Dave Ceddia'
    },
    likes: 317,
    retweets: 138,
    timestamp: '2016-08-02 10:00:10'
  }
];

ReactDOM.render(<TweetList tweets={tweets} />, document.querySelector('#root'));

export { TweetList, tweets };
