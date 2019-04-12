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
        names: res.data,
        newName: "David"
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

  replaceName = (index , newName) => {
    axios.put(`/api/dummydata/${index}` , {name: newName})
    .then(res => {
      this.setState({
        names: res.data
      })
    })
  }
  
  render() {
    console.log(this.state.names)
    // console.log('THIS IS PROPS ON APP: ' , this.props)
    return (
      <>
      <Child 
        test={this.state.test}
        names={this.state.names}
        replaceName={this.replaceName}
      />
      <button onClick={this.deleteFirst}>NOT SO SMALL NOW!</button>

      
      </>
    );
  }
}

export default App;
