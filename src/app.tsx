import React from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from 'react-helmet'

import Home from './home/home'

import configFile from './config.json'
const config = configFile.config

import './fonts.css'
import './styles.css'
import './app.css'

function App() {

    return (
        <>
            <Helmet>
                <title>{ config.websiteTitle }</title>
            </Helmet>
            <Home/>
        </>
    )
}

// ========================================

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

