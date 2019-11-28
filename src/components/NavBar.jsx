import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import "./NavBar.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BetterFuture from './BetterFuture';
import { Link } from "react-router-dom";
import MainSection from './MainSection'
import HiddenPotentials from './HiddenPotentials'
// import App from './../App'


export default function NavBar() {

    return (

        <BrowserRouter>
            <Switch>
                <div className="navbar" >

                    
                    <ul>

                        <Link to="/">
                            <li className="router">   <HomeIcon /> Home  </li>
                        </Link>
                        <Route path='/' exact component={MainSection} />
                    </ul>

                    <ul>
                        <Link to="BetterFuture">
                            <li className="router">  <WhatshotIcon /> BETTER FUTURE </li>
                        </Link>

                        <Route path='/BetterFuture' component={BetterFuture} />
                    </ul>

                    <ul>
                        <Link to="HiddenPotentials">
                            <li className="router">   <GrainIcon /> HIDDEN POTENCIALS   </li>
                        </Link>

                        <Route path='/HiddenPotentials' component={HiddenPotentials} />

                    </ul>
                </div>
            </Switch>
        </BrowserRouter>

    );
}