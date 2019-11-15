import React from 'react';
import Typing from 'react-typing-animation';

function TypingSentence() {
    return (
    
         <Typing className="line" speed={90}>
                <h1> LOOKING FORWARD TOWARDS THE OPPORTUNITIES??  </h1>
                <Typing.Speed ms={100} />
                <br />
                <h3> "It is Educational based website which provide information regarding Educational QUERIES and which DISCIPLE is fruitful for you" </h3>
                <Typing.Reset count={1} delay={5} />
            </Typing>
       
    )

}
export default  TypingSentence;