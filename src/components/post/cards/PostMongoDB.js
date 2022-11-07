import React from "react";

const PostMongoDB = (props) => {
    return (
        <section style={styles.section}>
            <img style={styles.img} alt="beach scenery" src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"/>
            <h2>MongoDB</h2>
            <ol>
                <li>HTTP Methods</li> 
                <li>Access to Database</li> 
            </ol>
        </section>
    );
};

export default PostMongoDB;

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