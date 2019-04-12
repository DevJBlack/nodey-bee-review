import React, { Component } from 'react'

export default class GrandChild extends Component {

  state = {
    name: "Brian"
  }

  render() {
    console.log("GRANDCHILD RENDERED")
    // console.log("THIS IS PROPS IN GRANDCHILD: " , this.props)
    return (
      <>
        THIS IS GrandChild
      {this.props.names.map((val, i, arr) => {
          return (
            <div>
              <h1 key={i}>{val}</h1>
              <button onClick={() => { this.props.replaceName(i, this.state.name) }}>Replace</button>
            </div>
          )
        })}
        <input onChange={(event) => {
          this.setState({
            name: event.target.value
          })
          console.log("THIS IS EVENT.TARGET.VALUE: ", event.target.value)
        }} />
      </>
    )
  }
}