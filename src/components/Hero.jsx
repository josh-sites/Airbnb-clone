import React from "react"
import { ReactDOM } from "react"
import grid from "../assets/photo-grid.png"

function Hero() {
    return (
        <section className="hero">
            <img className="grid" src={grid} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}

export default Hero