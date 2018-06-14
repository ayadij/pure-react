# PROPS

- like HTML attributes
- short for properties
- functions have arguments, while components have props
- props let you pass data to your components
- props are read-only.. so components that receive props must not change them
  - In React, data flows one way. Props are read-only, and can only be passed down to children.
- destructure props { name }
- onAction prop is called whenever it needs to send up data or notify the parent that something happened
- props are evaluated before they are passed down



- the key prop is required any time you render an array of elements 
- a component can pass information to another component. Information that gets passed from one component to another is known as "props."
- Every component has something called props.
- A component's props is an object. It holds information about that component.
- To see a component's props object, you use the expression this.props. 



### Destructuring props

```js
const Hello = (props) => { 
  const { name } = props; 
  return (
    <span>Hello, {name}</span> 
  );
}
```