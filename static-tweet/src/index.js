import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// main component //
function Tweet() {
    return(
        <div className="tweet">
            <Avatar />
            <div className="content">
                <NameWithHandle />
                <Message />
                <div className="buttons">
                    <Time />
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}


// components //
function Avatar() {
    return(
        <img src="https://www.gravatar.com/avatar/7375b2f842171573d07e656a74552ed6" 
        className="avatar"
        alt="avatar" />
    );
}

function Message() {
    return(
        <div className="message">If you're bored, you're boring</div>
    );
}

function NameWithHandle() {
    return(
        <span className="name-with-handle">
            <span className="name">Aya</span>
            <span className="handle">@ayattaze</span>
        </span>
    );
}


// arrow functions //
const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);


// render //
ReactDOM.render(<Tweet />, document.querySelector('#root'));

