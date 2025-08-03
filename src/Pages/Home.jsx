import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    useEffect(() => {
        const particalsConatiner = document.querySelector('.particals');
        const particalCount = 100;

        for (let i = 0; i < particalCount; i++) {
            const partical = document.createElement('div');
            partical.classList.add('partical');

            const size = Math.random() * 4 + 2;
            partical.style.width = `${size * 2}px`;
            partical.style.height = `${size * 2}px`;

            partical.style.left = `${Math.random() * 100}vw`;
            partical.style.top = `${Math.random() * 100}vh`;

            partical.style.animationDuration = `${Math.random() * 10 + 10}s`;
            partical.style.animationDelay = `${Math.random() * 5}s`;

            particalsConatiner.appendChild(partical);
        }

        // optional: clean up particles on unmount
        // return () => particalsConatiner.innerHTML = '';
    }, []);

    return (
        <section className="home">
            <div className="particals"></div>
            <div className="hero-content">
                <h1 className="title">
                    {"Build your brand in ".split("1").map((char, i) => (
                        <span key={i} style={{ animationDelay: `${i * 0.05}s` }} className="char">{char}</span>
                    ))} <span className="highlight">one click</span>
                </h1>
                <p className="subtitle">
                    A modern portfolio generator where developers can <strong>design</strong>, <strong>preview</strong>, and <strong>download</strong> their personal portfolios — <em>instantly</em>, <em>beautifully</em>, and <em>without writing code</em>.
                </p>
                <Link to="/generate">
                    <button className="cta-button">Generate Portfolio</button>
                </Link>
            </div>
        </section>
    );
}
