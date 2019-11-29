import React from 'react';
import './BetterFuture.css';
import { BrowserRouter, Link, Route } from "react-router-dom";

// import Header from "./components/Header"


function BetterFuture() {
  return (
    <div className="BetterFuture">

      <h1>  Better Future </h1>
      <h2>Fill the Followings, to gain Favouritable outcomes:</h2>

      <form action="/" target="/">
        <fieldset>
          <label for="fullNameInput"> Your Full Name </label>

          <input id="fullNameInput" autofocus required />
        </fieldset>
        <fieldset>
          <label for="ageInput"> Your Age </label>
          <input id="ageInput" min="1" max="100" type="number" required />
        </fieldset>

        <fieldset>
          <label for="qualificationInput"> Your Present Qualification: </label> <br />
          <input id="qualificationInput-1" type='checkbox' />
          <label for="qualificationInput-1">  PHD </label>
          <input id="qualificationInput-2" type='checkbox' />
          <label for="qualificationInput-2"> M.Phil   </label>
          <input id="qualificationInput-3" type='checkbox' />
          <label for="qualificationInput-3">  Masters  </label>
          <input id="qualificationInput-4" type='checkbox' />
          <label for="qualificationInput-4"> Graduation  </label>
          <input id="qualificationInput-5" type='checkbox' />
          <label for="qualificationInput-5"> Intermediate </label>
        </fieldset>

        <fieldset>
          <label > Furture You Want To Study in: </label> <br />
          <input id="studyInput-1" type='checkbox' />
          <label for="studyInput-1"> Graduation </label>
          <input id="studyInput-2" type='checkbox' />
          <label for="studyInput-2">  Masters  </label>
          <input id="studyInput-3" type='checkbox' />
          <label for="studyInput-3">  M.Phil  </label>
          <input id="studyInput-4" type='checkbox' />
          <label for="studyInput-4">  PHD  </label>
        </fieldset>

        <fieldset>
          <label > The Discipline You Want To Study In: </label> <br />
          <input id="discipline-1" type='checkbox' />
          <label for="discipline-1"> Sciences </label>
          <input id="discipline-2" type='checkbox' />
          <label for="discipline-2"> Social Sciences </label>
          <input id="discipline-3" type='checkbox' />
          <label for="discipline-3"> Business </label>
          <input id="discipline-3" type='checkbox' />
          <label for="discipline-3"> Computer Science </label>
          <input id="discipline-4" type='checkbox' />
          <label for="discipline-4">  Engineering </label>
        </fieldset>

        <Link to="OutComeOfBetterFuture" style={{ "text-decoration": "none" }} >
        <input className="submit-button" type="submit" value="Submit!" />
        </Link>
      </form>
    </div>
  );
}

export default BetterFuture;
