'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/Header";
import nubladoSol from "../../public/nublado-sol.svg"
import { useEffect, useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function Weather() {
    const [temp, setTemp] = useState("");
    const [umid, setUmid] = useState("");
    const [chuv, setChuv] = useState("");
    const [date, setDate] = useState("");
    const [city, setCity] = useState("");
    const [dates, setDates] = useState([]);

    async function handleFetchClimateData() {
        const response = await fetch("https://api.hgbrasil.com/weather?key=452cf4b9&city_name=Rio de Janeiro,RJ", {
            method: "OPTIONS",
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin":'*',
                'Content-Type': 'application/json'
            }
        }).then(data => {
            console.log(data);
            return data.json();
        });
        const data = response.results;
        console.log(data);
        setDate(data.date);
        setTemp(data.temp);
        setUmid(data.humidity);
        setChuv(data.rain);
        setChuv(data.rain);
        setCity(data.city);
    }

    useEffect(()=> {
        handleFetchClimateData()
        console.log(temp, umid, chuv);
    }, [temp, umid, chuv])

    return (<>
        <style>
            {`
            select {
                background-color: white;
                margin: 60px auto;
                min-width: 600px;
                padding-top: 11px !important;
                padding: 8px;
                border: 1px black solid;
                position: relative;
                display: block;
                border-radius: 10px;
                font-family: Courier;
            }

            select option {
                border-radius: 10px;
                font-family: Courier;
            }

            * {
                font-weight: normal;
                font-family: Courier;
            }

            #weather {
                margin: auto 590px;
            }

            #weather-bottom {
                width: 100%;
                height: max-content
            }

            #weather-bottom-image {
                float: left;
                padding: 10px
            }

            #weather-bottom-data {
                float: right;
                width: fit-content;
            }

            #weather-bottom-data > * {
                margin: 10px
            }

            #weather-bottom-data > p {
                font-size: x-large
            }

            #weather-bottom-data > h2 {
                font-size: xx-large
            }
            
            `}
        </style>
        <form>
            <select>
                <option>
                    rio de Janeiro, rj - brasil
                </option>
            </select>
        </form>
        <div id="weather">
            <div id="weather-top">
                <h1>{city || "---"}</h1>
                <h2>{date || "---"}</h2>
            </div>
            <div id="weather-bottom">
                <div id="weather-bottom-image">
                    <Image
                        src="/nublado-sol.svg"
                        id="weather-image"
                        width={230}
                        height={140}
                        alt={"nublado com sol"}
                        priority
                    />
                </div>
                <div id="weather-bottom-data">
                    <h2>nublado</h2>
                    <p>temp.: {temp || "---"}</p>
                    <p>chuv.: {chuv || "---"}</p>
                    <p>umid.: {umid || "---"}</p>
                </div>
                <div id="weather-date-selector">
                    <RadioGroup>
                        {dates.map((date) => {
                            return <FormControlLabel key={date}
                                value="female" 
                                control={<Radio />} 
                                label="Female" 
                                labelPlacement="top"
                            />
                        })}
                    </RadioGroup>
                </div>
            </div>
        </div>
        <div>
            
        </div>
    </>);
}
