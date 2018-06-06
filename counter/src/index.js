import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// First example: A simple Parent and Child, where the Parent
// simply prints to the console when the button is clicked in Child
class Parent extends React.Component {
  // Don't need to write this as an arrow function
  // because it does not use "this". You're free to
  // use the arrow syntax if you prefer, though.
  handleAction(action) {
    console.log('Child says', action);
  }

  render() {
    return (
      <Child onAction={this.handleAction}/>
    );
  }
}

class Child extends React.Component {
  // Written as an arrow function becuase it uses "this"
  alertParent = () => {
    this.props.onAction('button was clicked');
  }

  render() {
    return (
      <button onClick={this.alertParent}>Click Me</button>
    );
  }
}

// Second example: A Parent that counts the number of button clicks
// Notice that it re-uses the same Child component above
class CountingParent extends React.Component {
  // This is one way of initializing state
  constructor(props) {
    super(props);

    // Set the state here. Use "props" if needed.
    this.state = {
      actionCount: 0
    };
  }

  handleAction = (action) => {
    console.log('Child says', action);
    // Replace actionCount with an incremented value
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


// Third example: a Page containing a few CountingParents, to demonstrate that
// state is independent for every component
const Page = () => (
  <div>
    <CountingParent/>
    <CountingParent/>
    <CountingParent/>
  </div>
);

// This is an answer to the "Reset Button" mini-exercise
class CountingParentWithReset extends React.Component {
  // This is a more succinct way of initializing state
  // If I don't need to set up anything in the constructor,
  // I prefer this way because it's shorter.
  state = { actionCount: 0 }

  handleAction = (action) => {
    // Replace actionCount with an incremented value
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  /* This function has been added */
  handleReset = (action) => {
    // Reset actionCount to 0
    this.setState({
      actionCount: 0
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction}/>
        <p>Clicked {this.state.actionCount} times</p>
        {/* call handleReset when the button is clicked */}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

// Here's the 2nd part of that exercise, with the Child modified
// to take an "onReset" prop and call it when the button is clicked
class ChildWithReset extends React.Component {
  alertParent = () => {
    this.props.onAction('button was clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.alertParent}>Click Me</button>
        <button onClick={this.props.onReset}>Reset</button>
      </div>
    );
  }
}

class ParentUsingChildWithReset extends React.Component {
  // Initial state is set up here. You can refer to this.props
  // here if you need to.
  state = {
    actionCount: 0
  }

  handleAction = (action) => {
    // Replace actionCount with an incremented value
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  /* This function has been added */
  handleReset = (action) => {
    // Reset actionCount to 0
    this.setState({
      actionCount: 0
    });
  }

  render() {
    return (
      <div>
        {/* call handleReset when the button is clicked */}
        <ChildWithReset
          onAction={this.handleAction}
          onReset={this.handleReset}/>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}


const Demo = () => (
  <div>
    <div>Example 1: Click the button and check the console</div>
    <div style={{margin: 20}}>
      <Parent/>
    </div>

    <div>Example 2: Click the button and watch the counter increment</div>
    <div style={{margin: 20}}>
      <CountingParent/>
    </div>

    <div>Example 3: Every instance of a component has its own independent state:</div>
    <div style={{margin: 20}}>
      <Page/>
    </div>

    <div>"Reset Button" Exercise:</div>
    <div style={{margin: 20}}>
      <CountingParentWithReset/>
    </div>

    <div>"Reset Button" Exercise Part 2:</div>
    <div style={{margin: 20}}>
      <ParentUsingChildWithReset/>
    </div>
  </div>
)

ReactDOM.render(<Demo/>, document.querySelector('#root'));
