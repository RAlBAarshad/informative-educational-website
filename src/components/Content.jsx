import React from 'react';
import './Content.css';
import img_2 from "./acids/2.png";
import img from "./acids/3.png";
import TypingSentence from './TypingSentence';


function Content() {
    return (
        <div className="Content">

           <TypingSentence />

            <div className="main-content">
                <span>
                    <div>
                      <h1>CHECK OUT YOUR BETTER FUTURE </h1>
                      <p> This app gives you information related to the universities you want
                          dddddddddddddddddddddddddddddddddddddddddddddddddd
                      </p>
                    </div>
                    <img src={img_2} alt="" />
                </span>

                <span>
                    <img src={img} alt="" />
                    <div>
                    <h1> CHECK HIDDEN ABILITIES </h1>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing eli deserunt voluptates, ad nostrum enim odit totam assume </p>
                    </div>
                </span>
            </div>

        </div>
    )
}

export default Content;