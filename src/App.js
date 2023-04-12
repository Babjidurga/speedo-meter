import React from 'react'

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0
    }
  }

  delHeader = () => {
    this.setState({ show: false });
  }

  componentDidMount() {
    console.log("This will be called immediately after the return of render")
  }

  componentDidUpdate() {
    console.log("This will be called after every update")
  }

  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child />
    }
    return (
      <div>
        <center>
          {myHeader}
          <button type='button' onClick={this.delHeader}>Delete Header</button>
          <hr />
          <hr />
          <h3>count: {this.state.count}</h3>
          <button type='button' onClick={() => this.setState({ count: this.state.count + 1 })}>Increase</button>
          <button type='button' onClick={() => this.setState({ count: this.state.count - 1 })}>Decrease</button>
          <hr />
          <hr />
        </center>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("This method will be called if any things get deleted like items")
  }

  render() {
    return (
      <h1>Hello this is the string</h1>
    )
  }
}

export default Container;
