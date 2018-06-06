import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';


// main component //
function Tweet({ tweet }) {
    return(
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author} />
                <Time time={tweet.timestamp} />
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}


// components //
function Avatar({ hash }) {
    var url = "https://www.gravatar.com/avatar/${hash}"; 
    return(
        <img src={url} 
        className="avatar"
        alt="avatar" />
    );
}
 
function Message({ text }) {
    return(
        <div className="message">{text}</div>
    );
}

function NameWithHandle({ author }) {
    const { name, handle } = author;
    return(
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

function getRetweetCount(count) {
    if (count>0) {
        return(
            <span className="retweet-count">{count}</span>
        );
    } else {
        return null;
    }
}


// arrow functions //
const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);


const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
     </span>
);

const LikeButton = ({ count}) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 &&
            <span className="like-count">{count}</span>}
    </span>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);



// test data //
var testTweet = {
    message: "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    gravatar: "xyz",
    author: {
        handle: "webdeb",
        name: "Debbie"
    },
    likes: 2,
    retweets: 1,
    timestamp: "2016-07-30 21:24:37"
};


// render //
ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));

export { Tweet, testTweet}; 