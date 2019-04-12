import React , {Component} from 'react'
import GrandChild from './GrandChild';

export default class Child extends Component{
  
  
  render(){
    console.log("CHILD DID RENDER")
    // console.log(this.props)
    return(
      <>
      <GrandChild turtle={this.props.test}/>
      {this.props.names.map((val, i, arr) => {
        return (<h1 key={i}>{val}</h1>)
      })}
      </>
    )
  }
}