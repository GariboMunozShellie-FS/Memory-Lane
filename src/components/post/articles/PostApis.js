import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTwitter, BsFacebook } from "react-icons/bs";

import { Link } from "react-router-dom";

const PostApis = (props) => {
    return (
        <article style={styles.article} >
            
            <header style={styles.header}>
                <Link to='/home' style={styles.home} >Home </Link>
                <h1 style={styles.title}>Deploy Apis </h1>
                <section style={styles.article}>
                    <p> By: Shellie Munoz</p>
                    <p> Date: Oct 30, 2022</p>
                </section>
            </header>
            
            <section style={styles.section}>
                    <h3 style={styles.icons}> Share on: <IoIosMail/> <BsTwitter/> <BsFacebook/></h3>
                    
                <img style={styles.img} alt="beach scenery" src="https://blog.postman.com/wp-content/uploads/2021/03/APIs-in-Postman-e1616786230943.png"/>
                <p style={styles.p}> That are quite a bit of ways to deploy and API. The way that was talked for the site that I have been working on were by Github and Huroku. </p>
                <p style={styles.p}> One important factor for both of these method is to have everything push up to your Github. It best practice to be useing multiple branches and pull from this onto you main branche.  </p>
                <p style={styles.p}> Next, when you head to huroku, there would be a few things that would need to be done before had. In order to get these to work you would have to fill out the config values that would come from your database. This could be different depenting on what database you are using.</p>
                <p style={styles.p}> Once you get all of that completed then you are able to deploy you API. </p>
                
            </section>
        </article>
    );
};

export default PostApis;

const styles={
    article: {
        width:"85.5%",
        height: '100%',
        margin:"0px auto",
        position: "relative",
        background: "rgba(205,215,205,0.75)",
        padding:"30px",
    },
    img: {
    width: "100%",
    height: '350px',
    display:'block',
    objectFit: "cover",
    backgroundColor: "black",
  },
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
    home: {
        fontSize:"1.5rem",
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