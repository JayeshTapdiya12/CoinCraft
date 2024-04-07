import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

import classes from "./loader.module.css"

const Loader1 = () => {

    const [loaderTop, setLoaderTop] = useState('0'); // Initial top position of the loader

    useEffect(() => {
        // const loader = document.querySelector(classes.svg_frame);

        // Set the loader top position to "-100%" after 2000 milliseconds
        const timeoutId = setTimeout(() => {
            setLoaderTop('-100%');
        }, 1900);

        // Clear the timeout if the component is unmounted before the timeout completes
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures that this effect runs only once on mount



    return (
        <div>
            <div
                className={classes.svg_frame}
                style={{ top: loaderTop }}
            >
                <h1>Empower</h1>
                <h1>Your</h1>
                <h1>Money</h1>
            </div>
        </div>
    )
}

export default Loader1
