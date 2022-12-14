import React from "react";

const PostAuth = (props) => {
    return (
        <section style={styles.section}>
            <img style={styles.img} alt="login" src="https://img.freepik.com/free-vector/login-page-template-line-style_1017-31857.jpg?w=2000"/>
            <h2>Authentation</h2>
            <ol>
                <li>JSON Web Token</li> 
                <li>Authentication Flow</li> 
            </ol>
        </section>
    );
};

export default PostAuth;

const styles = {
  section: {
    width: "350px",
    padding: '10px',
    margin:'10px',
    float: "center",
    background:"rgba(100,115,100,0.5)"
  },
  img: {
    width: "100%",
    height: '200px',
    display:'block',
    objectFit: "cover",
    backgroundColor: "black",
  },
  link: {
    width: "25%",
    float: "right",
    color: 'blue'
  },
}