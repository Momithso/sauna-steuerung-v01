import React, {useState} from "react";

import './analogTime.css'
import './analogTemperature.css'
import './analogHumidity.css'

export function Temperature () {

    const [temperature, setTemperature] = useState(0);
    let rotateZ = 0;

    setInterval(() => {
        setTemperature(20)
    })

    rotateZ = (temperature * 1.5) - 90;

    const styleTemp = {
        transform: `rotateZ(${rotateZ}deg)`
    }

    return (
        <div className={"analogTemperature"}>
            <div className={"analogTemperaturePointer"}>
                <div className={"analogTemperaturePoint"} style={styleTemp}></div>
                <p>°C</p>
            </div>
        </div>
    )
}

export function Time () {

    const deg = 6;

    const [day, setDay] = useState(new Date())

    setInterval(() => {
        setDay(new Date())
    })

    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * deg;
    const sc = day.getSeconds() * deg;

    const styleHr = {
        transform: `rotateZ(${(hh)+(mm/12)}deg)`
    }
    const styleMm = {
        transform: `rotateZ(${mm}deg)`
    }
    const styleSc = {
        transform: `rotateZ(${sc}deg)`
    }

    return (
        <div className={"analogTime"}>
            <div className={"analogTimeHour"}>
                <div className={"analogTimeHr"} style={styleHr}></div>
            </div>
            <div className={"analogTimeMinute"}>
                <div className={"analogTimeMn"} style={styleMm}></div>
            </div>
            <div className={"analogTimeSeconds"}>
                <div className={"analogTimeSc"} style={styleSc}></div>
            </div>
        </div>
    )
}

export function Humidity () {

    const [humidity, setHumidity] = useState(0);
    let rotateZ = 0;

    setInterval(() => {
        setHumidity(60)
    })

    rotateZ = (humidity * 3) - 150;

    const styleTemp = {
        transform: `rotateZ(${rotateZ}deg)`
    }

    return (
        <div className={"analogHumidity"}>
            <div className={"analogHumidityPointer"}>
                <div className={"analogHumidityPoint"} style={styleTemp}></div>
                <p>%<br/><span>r. Luftfeuchte</span></p>
            </div>
        </div>
    )
}
