import React from "react";

const PostReact = (props) => {
    return (
        <section style={styles.section}>
            <img style={styles.img} alt="ReactJS" src="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png"/>
            <h2>React</h2>
            <ol>
                <li>Styles</li> 
                <li>Create HTML Elements</li> 
                <li>CURD</li>  
            </ol>
        </section>
    );
};

export default PostReact;

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