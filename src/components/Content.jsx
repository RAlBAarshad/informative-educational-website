import React from 'react';
import './Content.css';
import img_2 from "./acids/2.png";
import img from "./acids/3.png";
import img_3 from "./acids/1.jpg"
import img_6 from "./acids/img-6.jpg"

function Content() {
    return (

            <div className="main-content">
                <span>
                    <div>
                        <h1>CHECK OUT YOUR BETTER FUTURE </h1>
                        <p> It gives you information related to the universities you want to further study. It provide you list of unuiversities you can proceed. </p>
                    </div>

                    <div className="demo-css">
                        <img className="img_3" src={img_3} alt="" />
                        <img className="img_2" src={img_2} alt="" />

                    </div>
                </span>

                <span>
                    <div className="demo-css-2">
                        <img className="img_6" src={img_6} alt="" />
                        <img className="img" src={img} alt="" />

                    </div>

                    <div>
                        <h1> CHECK HIDDEN ABILITIES </h1>
                        <p> It gives u information regrading your skills and hidden potentions which would provide clear directions.</p>
                    </div>
                </span>
            </div>


    )
}

export default Content;