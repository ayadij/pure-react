


props are read-only
state can keep track of data that changes

#### if we wanted parent to keep track of how many times a function is called
- initial state (counter set to 0)
- call to incrememnt the counter (this.setState)
- display current count


to make a function stateful (vs stateless), it needs to be transformed into an ES6 **class component**




# setState
asynchronous

### Functional setState
in this form, you pass a function to setState. the function reveices the current state and props as arguments, and it is expected to return the desired new state. (pg 117)


#### old version of Parent
```js
function Parent() { 
  return (
    <Child onAction={handleAction}/> 
  );
}
```

#### new version
```js
class CountingParent extends React.Component { 
  state = {
    actionCount: 0 
  }

  handleAction = (action) => { 
    console.log('Child says', action);
    // actionCount is incremented, and
    // the new count replaces the existing one 
    this.setState({
      actionCount: this.state.actionCount + 1 
    });
  }

  render() { 
    return (
      <div>
        <Child onAction={this.handleAction}/> 
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    ); 
  }
}
```



as a general rule, data that is stored in state should be referenced inside -render- somewhere
component stat is for storing UI state
(things that affect the visual rendering of the page)
this makes sense bc any time state is update, the component will re-render

if modifying a peice of data doesnt visually change the componenet, the data shouldn't go into state



### DO put in state (examples)
- user entered input (text boxes and form fields)
- current or selected item (current tab or selected row)
- data from server (list of products or number of likes)
- open/closed state (open modal or sidebar expanded or hidden)

other stateful data, like handles to timers, should be stored on the component instance itself
feel free to use the .this object available in the class component

###Should Props go into State?
avoid it
componenets will automatically re-render when their props change, so theres no need to duplicate the props as a state

** whenever you can, it is best to keep components stateless.
componeents without state are easier to werite and reason






...

State
Dynamic information is information that can change.

React components will often need dynamic information in order to render. For example, imagine a component that displays the score of a basketball game. The score of the game might change over time, meaning that the score is dynamic. Our component will have to know the score, a piece of dynamic information, in order to render in a useful way.

There are two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same.

You just spent a long lesson learning about props. Now it's time to learn about state. props and state are all that you need to set up an ecosystem of interacting React components.

 
-----




Props and State are related

the sate of one component will often become the props of a child component.
props are passed tothe child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more famiiar tag attributes
`MyChild name={this.state.childsName}`

the parent's state value of childsName become the child's `this.props.name`. 
From the child's perspective, the `name` prop is immutable. 
if it needs to be changed, the parent should just change it's internal state:
`this.setState({ childsName: 'New name' });`
and React will propagate it to the child.
A natural follow-up question is: what if the child needs to change its `name` prop?
This is usually done through child events and parent callbacks. 
The child might expose an event called, for example, onNameChanged.
The parent would then subscribe to the event by passing a callback handler.
<MyChild name ={this.state.childsName} onNameChanged={this.handleName} />
The child would pass its requested new name as an argument to the event callback by calling
`this.props.onNameChanged('New name')`
and the parent would use the name in the event handler to update it's state.
```
handleName: function(newName) {
  this.setState({ childsName: newName });
}```
 

codepen.io/kang/pen/Pqxyqr
https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react
https://github.com/uberVU/react-guide/blob/master/props-vs-state.md


-------



for parent-child communicaiton, simply pass props

use STATE to store the data your current page needs in your controller-view

use PROPS to pass data & event handlers down to your child components.

most of your components should simply take some data from props and render it. 



STATE
- should be managed in your top level component
- is mutable
- has worse performance
- should not be accessed from child componentes
  - pass down props instead




















































