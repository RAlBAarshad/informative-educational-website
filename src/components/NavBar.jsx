import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import "./NavBar.css";
// import BetterFuture from './BetterFuture';
import { BrowserRouter, Link, Route } from "react-router-dom";
// import MainSection from './MainSection'
// import HiddenPotentials from './HiddenPotentials'
// import App from './../App'


export default function NavBar() {

    return (


        <div className="navbar" >
            <header>
                <h3> FUTURE ORIENTED </h3>
                <h4> Explore Your Potentials </h4>
            </header>
                    <ul>

                        <Link to="/">
                            <li className="router"> <p> <HomeIcon /> Home</p>    </li>
                        </Link>



                        <Link to="BetterFuture">
                            <li className="router"> <p><WhatshotIcon /> BETTER FUTURE</p>  </li>
                        </Link>


                        <Link to="HiddenPotentials">
                            <li className="router"> <p><GrainIcon /> HIDDEN POTENCIALS  </p>   </li>
                        </Link>


                    </ul>

        </div>
    );
}