import React from 'react';
import Header from './header';

function About() {
    return (
       <div className="container">
           <Header/>
           <h2>About</h2>
           <p>
               Here's an example you've seen before and you should be very comfortable with at this point. We've created a new React component that returns us a div that says "Hello " + whatever name you passed in when you invoked the component.
               You'll notice that this component just has a render method, that means we can remove the createClass abstraction and just use a plain function. Refactored to use a stateless functional component, the example above would look like this
           </p>
       </div>
    )
}

export default About