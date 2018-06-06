# PROPS

- like HTML attributes
- short for properties
- functions have arguments, while components have props
- props let you pass data to your components
- props are read-only.. so components that receive props must not change them
  - In React, data flows one way. Props are read-only, and can only be passed down to children.
- destructure props { name }
- onAction prop is called whenever it needs to send up data or notify the parent that something happened
- 




### Destructuring props

```js
const Hello = (props) => { 
  const { name } = props; 
  return (
    <span>Hello, {name}</span> 
  );
}
```