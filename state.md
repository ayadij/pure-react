


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


