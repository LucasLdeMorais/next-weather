'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/Header";
import nubladoSol from "../../public/nublado-sol.svg"

export default function Weather() {
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
            margin: 60px auto;
            width: max-content;
        }

        #weather-bottom {
            
        }

        #weather-bottom-data > p {
            font-size: large
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
            <h2>rio de Janeiro, rj - brasil</h2>
            <h3>11 de abril de 2024</h3>
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
                <p>t: 17°</p>
                <p>c: 0mm</p>
                <p>u: 10%</p>
            </div>
        </div>
    </div>
    <div>
        
    </div>
  </>);
}
