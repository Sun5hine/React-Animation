import React from 'react';
import {Spring} from 'react-spring';

export default function Component1() {
  return (
    <Spring
    from={{ opacity: 0, marginTop: -500}}
    to={{ opacity: 1, marginTop: 0 }}
     >
    {props => (
       <div style={props}>
         <div style={c1Style}>
           <h1>Component 1</h1>
       <p> Thank you for this quick introduction. I would have liked it more, if you could have explained the more complex syntax and attributes for the transition a little bit more. This part seems like you yourself are just copying from the documentation and do not understand every detail of this.  </p>
       
       </div>
       </div>
     )}
    </Spring>

  )
}
const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
}
