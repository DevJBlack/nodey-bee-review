import React, { Component } from 'react'

export default class GrandChild extends Component {

  state = {
    name: "Brian",
    targetIndex: 0
  }

  render() {
    console.log("GRANDCHILD RENDERED")
    // console.log("THIS IS PROPS IN GRANDCHILD: " , this.props)
    return (
      <>
        THIS IS GrandChild
      {this.props.names.map((val, i, arr) => {
          return  <h1 onClick={()=>{
            this.setState({
              targetIndex: i
            })
          }} key={i}>{val}</h1>

        })}
        <input onChange={(event) => {
          this.setState({
            name: event.target.value
          })
          console.log("THIS IS EVENT.TARGET.VALUE: ", event.target.value)
        }} />
        <button onClick={() => {
          this.props.replaceName(this.state.targetIndex, this.state.name)
        }}>JUST DO IT</button>
      </>
    )
  }
}