
import ExchangeCard from "../../components/ExchangeCard/ExchangeCard"
import "./home-page.css"
import React, { useState, useEffect } from "react";

export default function HomePage(){
    
        const [date, setDate] = useState([]);

    useEffect(()=>{

        fetch("https://open.er-api.com/v6/latest/USD")
        .then((res)=>res.json())
        .then((data) => setDate(data))

    },[]);

    return(
        <>

        <div id="home-container">
        
            <h3>
                Time Last Update: {date.time_last_update_utc}
            </h3>

            <ExchangeCard/>

        </div>
        
        </>
    )

}