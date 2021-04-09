import React,{ Component } from "react";
class Counter extends Component {
         state = {
                  count:0
         }

         render(){
                  return(<div>
                           <span>{this.formatCount()}</span>
                           <div><button>increment</button></div>
                  </div>);
         }
         formatCount(){
                  const {count} = this.state;
                  const x = <h1>ZERO</h1>
                  return count === 0 ? x : count
         }
}
export default Counter;