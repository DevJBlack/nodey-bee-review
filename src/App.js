import React, { Component } from 'react';
import Child from './components/Child';
import axios from 'axios'

class App extends Component {

  state = {
    test: "test",
    names: []
  }

  componentDidMount(){
    console.log("COMPONENT DID MOUNT")
    axios.get('/api/dummydata').then(res => {
      this.setState({
        names: res.data
      })
    })
  }

  deleteFirst = ()=> {
    axios.delete('/api/dummydata/0')
    .then(res => {
      this.setState({
        names: res.data
      })
    })
  }
  
  render() {
    console.log("APP DID RENDER")
    // console.log('THIS IS PROPS ON APP: ' , this.props)
    return (
      <>
      <Child 
        test={this.state.test}
        names={this.state.names}
      />
      <button onClick={this.deleteFirst}>NOT SO SMALL NOW!</button>

      
      </>
    );
  }
}

export default App;
