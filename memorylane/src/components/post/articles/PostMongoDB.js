import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const PostMongoDB = (props) => {
    return (
        <article >
            <header style={styles.header}>
                <Link to='/home' style={styles.home} >Home </Link>
                <h1 style={styles.title}>MongoDB </h1>
                <section style={styles.article}>
                    <p> By: Shellie Munoz</p>
                    <p> Date: Oct 30, 2022</p>
                </section>
            </header>
            <section style={styles.section}>
                    <h3 style={styles.icons}> Share on: <IoIosMail/> <BsTwitter/> <BsFacebook/></h3>
                    
                <img style={styles.img} alt="beach scenery" src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"/>
                <p style={styles.p}>Before Starting my education in this field, I  never realise that the are different method depending on what site you are using and what you main objecting is.
                When I think about is know i make sence because you dont want to give people information that the should be able to get. </p>
                <p style={styles.p}>Another thing that I learn was how to create and access a database. When I first tried this out I struggled quite a bit since I didnt know exacly what I was doing. I does take me a bit before I build and created the nesseceery coding to begin but I know that this will become second nature for me.  </p>
            </section>
        </article>
    );
};

export default PostMongoDB;

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
    img: {
        width: "100%",
        height: '200px',
        display:'block',
        objectFit: "cover",
        backgroundColor: "black",
    },
    home: {
        fontSize:"1.5rem",
    },
    title: {
        fontSize:"2rem",
    },
    article: {
        gap: '20px',
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