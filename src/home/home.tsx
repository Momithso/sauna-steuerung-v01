import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";

import { Temperature, Time, Humidity} from "../analogInformations/analogInformations";
import ShortControls from '../shortControls/shortControls'

import './home.css'

export default function home() {

    return (
        <Router>
            <div className={"display"}>
                <div className={"mainView"}>
                    <Switch>

                        <Route exact path={"/"}>
                            <div className={"startView"}>
                                <a className={"startViewTouch"}/>
                                <Temperature/>
                                <Time/>
                                <Humidity/>
                                <a className={"techMenu"}>Techniker Menu</a>
                            </div>
                        </Route>
                    </Switch>
                </div>

                <ShortControls/>
            </div>
        </Router>
    )
}
