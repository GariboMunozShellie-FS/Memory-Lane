import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const PostReact = (props) => {
    return (
        <article >
            <header style={styles.header}>
                <Link to='/home' style={styles.home} >Home </Link>
                <h1 style={styles.title}>React</h1>
                <section style={styles.article}>
                    <p> By: Shellie Munoz</p>
                    <p> Date: Oct 30, 2022</p>
                </section>
            </header>
            <section style={styles.section}>
                    <h3 style={styles.icons}> Share on: <IoIosMail/> <BsTwitter/> <BsFacebook/></h3>
                    
                <img style={styles.img} alt="ReactJS" src="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png"/>
                <p style={styles.p}>One of the easiest thing to incorperate and hardest is the CSS for react. When I can include the certain area in a json format it become the easiest version for CSS. Yet, for some reason, when i try to include it in a CSS page, I struggle to keep everything in check.</p>
                <p style={styles.p}>When I was trying to get some basic use for Javascript, I struggle because I didn't want to include anything to crazy. One thing I had to research was for include to show how someone message was sent, and I took me sometime to get that right. </p>
                <p style={styles.p}>Lastly, There are some area that i struggle when I come to CURD, but i have in able to incorperate it within my work. I dose take me some time, and I have the best way for me and the code to find exactly what I need to either be able to create, or even delete.</p>
                
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
    height: '200px',
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