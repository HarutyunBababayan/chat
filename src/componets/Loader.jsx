import React from 'react';
import classes from "./Login.module.css";

const Loader = () => {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.ldsHourglass}>
<h1>Loading</h1>
                </div>
            </div>
        </div>
    );
};

export default Loader;