// import React, { Component } from "react";

// class ClassComponent extends Component {

//     state = {
//         count: 0
//     }

//     componentDidMount(){
//         document.title = this.state.count
//     }
//     componentDidUpdate(){
//         document.title = this.state.count
//     }

//     render(){
//         let {count} = this.state
//         return (
//             <div>
//                 {count}
//                 <br/> <br/>
//                 <button onClick={()=>this.setState({
//                     count: count + 1
//                 })}> Increase </button>
//                 <button onClick={()=>this.setState({
//                     count: count - 1
//                 })}> Decrease </button>
//             </div>
//         )
//     }
// }

// export default ClassComponent