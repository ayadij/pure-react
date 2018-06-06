import React from 'react';
import ReactDOM from 'react-dom'; 
// the strings "react" and "react-dom" are important: 
// they correspond to the names of modules installed by npm

function HelloWorld() {
    return(
        <div>Hello World!</div>
    );
}



ReactDOM.render(
    <HelloWorld />,
    document.querySelector('#root'));