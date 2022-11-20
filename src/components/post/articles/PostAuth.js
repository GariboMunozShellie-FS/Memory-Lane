import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const PostAuth = (props) => {
    return (
        <article >
            <header style={styles.header}>
                <Link to='/home' style={styles.home} >Home </Link>
                <h1 style={styles.title}>Authentation</h1>
                <section style={styles.article}>
                    <p> By: Shellie Munoz</p>
                    <p> Date: Nov 20, 2022</p>
                </section>
            </header>
            <section style={styles.section}>
                    <h3 style={styles.icons}> Share on: <IoIosMail/> <BsTwitter/> <BsFacebook/></h3>
                    
                <img style={styles.img} alt="login" src="https://img.freepik.com/free-vector/login-page-template-line-style_1017-31857.jpg?w=2000"/>
                <p style={styles.p}>One of the thing to remember when it come to Authentation, is where and how you are creating the authentation is stored.</p>
                <p style={styles.p}>In this case we had to create a token that was going to be stored in localstorage. I did notice that the token withhold for a wile even when I left the site. I do think it would be inportant to create a time for a certain that the token is vaild for.</p>
                <p style={styles.p}>One thing that i notice was how much testing is needed. you are not only looking for the header or the desire key, but it inportant to test in there is a value inside.</p>
            </section>
        </article>
    );
};

export default PostAuth;

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