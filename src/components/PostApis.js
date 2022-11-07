import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTwitter, BsFacebook } from "react-icons/bs";

const PostApis = (props) => {
    return (
        <article >
            <header style={styles.header}>
                <h1 style={styles.title}>Apis </h1>
                <section style={styles.article}>
                    <p> By: Shellie Munoz</p>
                    <p> Date: Oct 30, 2022</p>
                </section>
            </header>
            <section style={styles.section}>
                    <h3 style={styles.icons}> Share on: <IoIosMail/> <BsTwitter/> <BsFacebook/></h3>
                    
                <img style={styles.img} alt="beach scenery" src="https://blog.postman.com/wp-content/uploads/2021/03/APIs-in-Postman-e1616786230943.png"/>
                <p style={styles.p}>There are many different type of APIs. For example, there public, private and restful. Depending on the API you need to access or create and change the required. </p>
                <p style={styles.p}>When it come to creating an APIs, you need to plan everything from start to finish. Then you can start to build, but you need to remember that you will need to write test. Of course, you need to be able to document the capability that users can get more information and what they will be able to do for them.</p>
            </section>
        </article>
    );
};

export default PostApis;

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