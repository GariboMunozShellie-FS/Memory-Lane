import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import PostApis from "./post/cards/PostApis";
import PostMongoDB from "./post/cards/PostMongoDB";
import PostReact from "./post/cards/PostReact";
import PostCurd from "./post/cards/PostCurd";
import PostReactNative from "./post/cards/PostReactNative";
import PostAuth from "./post/cards/PostAuth";

const Article = (props) => {
    return (
        <article style={styles.article}>
            <h2 style={styles.title}>Memory Lane </h2>
            <section style={styles.post}>
                <Link to='/apis' style={styles.link} > <PostApis/></Link>
                <Link to='/react' style={styles.link} ><PostReact/> </Link>
                <Link to='/curd' style={styles.link} ><PostCurd/> </Link>
            </section>
            <section style={styles.post}>
                <Link to='/mongodb' style={styles.link} ><PostMongoDB/> </Link>
                <Link to='/reactnative' style={styles.link} ><PostReactNative/> </Link>
                <Link to='/reactauth' style={styles.link} ><PostAuth/> </Link>
            </section>
            <br/><br/><br/>
            <p style={styles.p}>
                When it came to coding, I didnt know anything before starting this program.
                The little that I did gain was for some knowleged when we had to incorperated coding when I was earning my comuter animation. 
                All the knowleged that I have so far is due to my schooling and the research that I needed to do in order to get a better understanind on what I was currently working on at the time.
            </p>
            <br/><br/><br/>
            <Contact/>
        </article>
    );
};

export default Article;

const styles={
    article: {
        width:"85.5%",
        height: '100%',
        margin:"0px auto",
        position: "relative",
        background: "rgba(205,215,205,0.75)",
        padding:"30px",
    },
    imgMain: {
        width:"100%",
        margin:"20px auto",
        position: "relative",
    },
    title: {
        background:"rgba(100,115,100,0.5)",
        padding:"20px",
        fontSize:"2rem",
        textAlign: "center"
    },
    post: {
        width:"90%",
        margin:"20px auto",
        display: "flex",
        flexDirection: "row"
    },
    p: {
        color:"#000",
        width:"95%", 
        fontFamily:"Helvetica, Arial, sans-serif", 
        margin:"15px auto",
        fontSize:"1.1rem",
        textAlign:"justify",
        lineHeight:"1.3rem",
    },
}