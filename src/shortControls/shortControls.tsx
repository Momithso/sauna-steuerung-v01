import React from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud, faFan, faLightbulb, faPlay, faSwatchbook, faUndo, faMusic, faVolumeDown, faVolumeUp} from "@fortawesome/free-solid-svg-icons";

import './shortControls.css'

export default function shortControls() {

    return (
        <ul className={"shortControls"}>
            <li className={"shortControlsItem shortControlsIcon"}>
                <a><FontAwesomeIcon icon={faLightbulb}/></a>
            </li>
            <li className={"shortControlsItem shortControlsIcon"}>
                <a><FontAwesomeIcon icon={faSwatchbook}/></a>
            </li>
            <li className={"shortControlsItem"}>
                <a><FontAwesomeIcon icon={faCloud}/></a>
            </li>
            <li className={"shortControlsItem shortControlsIcon shortControlsFan"}>
                <a><FontAwesomeIcon icon={faFan}/></a>
            </li>
            <li className={"shortControlsItem"}>
                <a><FontAwesomeIcon icon={faVolumeUp}/><p>Kabine</p></a>
            </li>
            <li className={"shortControlsItem"}>
                <a><FontAwesomeIcon icon={faVolumeUp}/><p>Raum</p></a>
            </li>
            <li className={"shortControlsItem"}>
                <a><FontAwesomeIcon icon={faMusic}/></a>
            </li>
            <li className={"shortControlsItem audioPlayerControlVolumeLevel"}>
                <a><FontAwesomeIcon icon={faVolumeDown}/></a>
            </li>
            <li className={"shortControlsItem audioPlayerControlSpeaker"}>
                <a><FontAwesomeIcon icon={faPlay}/></a>
            </li>
            <li className={"shortControlsItem audioPlayerControlVolumeLevel"}>
                <a><FontAwesomeIcon icon={faVolumeUp}/></a>
            </li>
            <li className={"shortControlsItem"}>
                <a><FontAwesomeIcon icon={faUndo}/></a>
            </li>
        </ul>
    )
}
