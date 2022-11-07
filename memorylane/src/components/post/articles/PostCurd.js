import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const PostCurd = (props) => {
    return (
        <article >
            <header style={styles.header}>
                <Link to='/home' style={styles.home} >Home </Link>
                <h1 style={styles.title}>CURD </h1>
                <section style={styles.article}>
                    <p> By: Shellie Munoz</p>
                    <p> Date: Oct 30, 2022</p>
                </section>
            </header>
            <section style={styles.section}>
                    <h3 style={styles.icons}> Share on: <IoIosMail/> <BsTwitter/> <BsFacebook/></h3>
                    
                <img style={styles.img} alt="C.R.U.D." src="https://miro.medium.com/max/1400/1*2eBdh0vLZjUyCDF6x1EqvQ.png"/>
                <p style={styles.p}>Everything has a basic curd function when I come to your database. </p>
                <p style={styles.p}>CURD is meant for you to be able to look over everything within your database. Since you are keepig information and not being able to read your data would leave you with no way to access or even know what you aew interacting with. </p>
                <p style={styles.p}> Another item would be for you to be able to create a new item in your database. Nothing is ever set in stone, new things can always be added since new thing are coming out. </p>
                <p style={styles.p}> Just like create, you should be able to update. For example, if you had a datebase for some products, you would most likly list the price. Yet what is the item were to go on sell? Most likly that price would need to be change to fit that new change.</p>
                <p style={styles.p}> Lastly, it nesseceery to be able to delete items as well. I mention earlier that new thing come out frequently. which mean some item might be relevent to even have anymore. it imposrtant to be able to take these out and inprove the storage for you database from unnesseceery information. </p>
                
            </section>
        </article>
    );
};

export default PostCurd;

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
    home: {
        fontSize:"1.5rem",
    },
    img: {
    width: "100%",
    height: '375px',
    display:'block',
    objectFit: "cover",
    backgroundColor: "black",
  },
    title: {
        fontSize:"2rem",
    },
    icons: {
        fontSize:"1rem",
        gap: '5px',
        textAlign: 'left',
        display: 'flex'
    },
    section: {
        width:"50%",
        height: '100%',
        margin:"0px auto",
        textAlign: "left",
        padding:"20px 60px",
        background:"rgba(100,115,100,0.5)",
        display: 'flex',
        flexDirection: 'column'
    },
}