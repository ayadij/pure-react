


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






 

