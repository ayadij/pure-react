import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle author={tweet.author}/>
        <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}
Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
};

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img src={url} className="avatar" alt="avatar" />
  );
}
Avatar.propTypes = {
  hash: PropTypes.string
};


function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}
Message.propTypes = {
  text: PropTypes.string
};


function NameWithHandle({ author }) {
  var { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}
NameWithHandle.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
};

const computeTimeString = time => moment(time).fromNow();

function Time({ time }) {
  return (
    <span className="time">{computeTimeString(time)}</span>
  );
}

Time.propTypes = {
  time: PropTypes.string
};

function ReplyButton() {
  return (
    <i className="fa fa-reply reply-button"/>
  );
}

function Count({ count }) {
  if(count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}
Count.propTypes = {
  count: PropTypes.number
};


function RetweetButton({ count }) {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet"/>
      <Count count={count}/>
    </span>
  );
}

RetweetButton.propTypes = {
  count: PropTypes.number
};


function LikeButton({ count }) {
  return (
    <span className="like-button">
      <i className="fa fa-heart"/>
      {count > 0 ?
       <span className="like-count">{count}</span>
       : null}
    </span>
  );
}
LikeButton.propTypes = {
  count: PropTypes.number
};

function MoreOptionsButton() {
  return (
    <i className="fa fa-ellipsis-h more-options-button"/>
  );
}

export default Tweet;
