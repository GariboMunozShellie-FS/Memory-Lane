import React from "react";

const PostReactNative = (props) => {
    return (
        <section style={styles.section}>
            <img style={styles.img} alt="ReactJS" src="https://codersera.com/blog/wp-content/uploads/2019/02/react-native.png"/>
            <h2>React Native</h2>
            <ol>
                <li>Navigation</li> 
                <li>Params</li> 
            </ol>
        </section>
    );
};

export default PostReactNative;

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
    width: "35%",
    float: "right",
    color: 'blue'
  },
}