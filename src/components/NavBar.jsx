import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import "./NavBar.css"

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function NavBar() {

    return (
        // <Paper elevation={0}>

            <Breadcrumbs  className="navbar" >
                <Link href="/" onClick={handleClick} >
                    <HomeIcon  />
                   <li>HOME</li> 
               </Link>

                <Link
                    href="/getting-started/installation/"
                    onClick={handleClick}
                    >
                 <WhatshotIcon  />
                  <li>BETTER FUTURE</li>  
               </Link>

                <Link>
                    <GrainIcon />
                   <li>HIDDEN POTENCIALS</li> 
                </Link>

            </Breadcrumbs>
        // </Paper>
    );
}