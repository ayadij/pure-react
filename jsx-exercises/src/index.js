import React from 'react';
import ReactDOM from 'react-dom';

function MyExample() {
    return (
        <div className='book'>
            <div className='title'>Welcome to the World</div>
            <div className='author'>Meekter Atka</div>
            <ul className='stats'>
                <li className='rating'>5 stars</li>
                <li className='isbn'>12-345678-910</li>
            </ul>
        </div>
    );
}

ReactDOM.render(
    <MyExample />, document.querySelector('root')
);

// ReactDOM.render(<MyExample />, document.querySelector('root'));
