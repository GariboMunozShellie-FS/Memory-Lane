import React from "react";

const PostApis = (props) => {
    return (
        <section style={styles.section}>
            <img style={styles.img} alt="beach scenery" src="https://blog.postman.com/wp-content/uploads/2021/03/APIs-in-Postman-e1616786230943.png"/>
            <h2>APIs</h2>
            <ol>
                <li>Access Data</li> 
                <li>Different types of APIs</li> 
                <li>Create</li>  
            </ol>
        </section>
    );
};

export default PostApis;

const styles = {
  section: {
    width: "250px",
    padding: '10px',
    margin:'10px',
    float: "left",
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