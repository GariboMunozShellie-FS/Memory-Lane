import React from "react";


const Footer = (props) => {
    return (
        <footer style={styles.myfooter}>
            <h4> 2022 © All rights reserved. </h4>
        </footer>
    );
};

export default Footer;

const styles = {
    myfooter: {
        background:"rgba(100,115,100,0.75)",
        padding: "1.5%",
        color: "white",
        fontSize: ".75rem",
    },
};