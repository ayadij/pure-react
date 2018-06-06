# ternary operator 
### ?
```js
function ValidIndicator() { 
    var isValid = true;
    return (
        <span>{isValid ? 'valid' : 'not valid'}</span> 
    );
}
```

# boolean operators 
### && 
```js
function ValidIndicator() { 
    var isValid = true; 
    return (
        <span>
            {isValid && 'valid'}
            {!isValid && 'not valid'} 
        </span>
    ); 
}
```