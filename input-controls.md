## Controlled Inputs

the reason they're called controlled is bc you are responsible for contolling their state

state: a vlaue and callback function are passed in as props, the child notifies parents, then parent component is responsible to reacting to changes and passing updated value to child

controlled input looks like this:

```js
class Example extends React.Component { 
  state = { text: '' };

  handleChange = (event) => { 
    this.setState({
      text: event.target.value 
      });
  };

  render() { 
    return (
      <input type="text" value={this.state.text} 
      onChange={this.handleChange} />
    ); 
  }
}

```


try changing this.setState to ignore all event data
instead always setting the text the the same value,

### controlled input
- accepts its current value as a prop, as well as a callback to change that value
- changes states


### uncontrolled inputs
- not as powerful 
- when an input is uncontrolled, it manages its own internal state
- remembers what you typed in a form.. you have to pull the value from the field when you need it. 

#### ref
the ref prop is a special one
pass it a function, reacti will call that function with the components DOM element once the component is finished mounting
the ref gives you access to the inputs underyling DOM node so you can pull out its value directly
refs can only  be used on regular elements (div, input, etc) and stateful (class) components.
No way to refer stateless components bc they dont have backing instance
cannot attach a ref prop to a stateless component


the goal is a "single source of truth"


