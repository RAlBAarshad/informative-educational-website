import React from 'react';
import Typist from 'react-typing-animation';
import "./TypingSentence.css";

function TypingSentence() {
    return (
        <div className="main">
           <section className="left" >
            <Typist className="line" speed={90}>
                <h1> LOOKING FORWARD TOWARDS THE OPPORTUNITIES!!  </h1>
            </Typist>
            <h2> "It is Educational based website which provide information regarding Educational QUERIES and which DISCIPLE is fruitful for you" </h2>
            </section>
        </div>
    )

}
export default TypingSentence;