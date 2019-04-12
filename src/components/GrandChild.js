import React , {Component} from 'react'

export default class GrandChild extends Component{
  render(){
    console.log("GRANDCHILD RENDERED")
    // console.log("THIS IS PROPS IN GRANDCHILD: " , this.props)
    return(
      <>
      THIS IS GrandChild
      </>
    )
  }
}