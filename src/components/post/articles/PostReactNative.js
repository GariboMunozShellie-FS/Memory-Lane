import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const PostReact = (props) => {
    return (
        <article >
            <header style={styles.header}>
                <Link to='/home' style={styles.home} >Home </Link>
                <h1 style={styles.title}>React Native</h1>
                <section style={styles.article}>
                    <p> By: Shellie Munoz</p>
                    <p> Date: Oct 30, 2022</p>
                </section>
            </header>
            <section style={styles.section}>
                    <h3 style={styles.icons}> Share on: <IoIosMail/> <BsTwitter/> <BsFacebook/></h3>
                    
                <img style={styles.img} alt="React Native" src="https://codersera.com/blog/wp-content/uploads/2019/02/react-native.png"/>
                <p style={styles.p}>One thing that surprise me about React Native, was from how different it actually is from React. Is has a similer structure but there is some area that I didnt know how to even tackle.</p>
                <p style={styles.p}>One thing was the navigation, within react you just need to really add a link to get it to work properly. yet in native, you not only do this, but also have to pass a prop up into the component pr page you are working with, and continue until you get to the app.js.</p>
                <p style={styles.p}>Another thing that was different was to grab in inputs of text. Unforturnly you have to grab inputs individuelly and then you can set them in there own variable to create an array. The are better way to do this but due to my current skill set, this would have been more difficult.</p>
            </section>
        </article>
    );
};

export default PostReact;

const styles={
    header: {
        width:"100%",
        height: '250px',
        margin:"0px auto",
        textAlign: "center",
        padding:"20px",
        background:"rgba(100,115,100,0.5)",
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize:"2rem",
    },
    article: {
        gap: '20px',
    },
    home: {
        fontSize:"1.5rem",
    },
    img: {
    width: "100%",
    height: '400px',
    display:'block',
    objectFit: "cover",
    backgroundColor: "black",
    },
    icons: {
        fontSize:"1rem",
        gap: '5px',
        textAlign: 'left',
        display: 'flex'
    },
    section: {
        width:"50%",
        height: '100vh',
        margin:"0px auto",
        textAlign: "left",
        padding:"20px 60px",
        background:"rgba(100,115,100,0.5)",
        display: 'flex',
        flexDirection: 'column'
    },
}