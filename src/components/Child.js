import React , {Component} from 'react'
import GrandChild from './GrandChild';

export default class Child extends Component{
  
  
  render(){
    console.log("CHILD DID RENDER")
    // console.log(this.props)
    return(
      <>
      <GrandChild 
        names={this.props.names}
        replaceName = {this.props.replaceName}
      />
      
      </>
    )
  }
}