
import ExchangeCard from "../../components/ExchangeCard/ExchangeCard"
import "./home-page.css"
import React, { useState, useEffect } from "react";

export default function HomePage(){
    


    return(
        <>

        <div id="home-container">

            <h1>Convert money effortlessly with our Currency Exchange App. Get up-to-date exchange rates, switch between currencies easily.</h1>
            <p id="support">Supports 165 currencies WorldWide using ExchangeRate-API</p>

            <ExchangeCard/>

        </div>
        
        </>
    )

}