import React, { Component } from "react";
import {Spring} from 'react-spring';

export class Component2 extends Component {
  render(){
  return (
    <Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    config={{ delay: 1000, duration: 1000}}
     >
    {props => (
       <div style={props}>
         <div style={c2Style}>
           <h1>Component 1</h1>
       <p> Thank you for this quick introduction. I would have liked it more, if you could have explained the more complex syntax and attributes for the transition a little bit more. This part seems like you yourself are just copying from the documentation and do not understand every detail of this.  </p>
       </div>

       </div>
     )}
     </Spring>

  );
}
}
const c2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem'
}

export default Component2;
