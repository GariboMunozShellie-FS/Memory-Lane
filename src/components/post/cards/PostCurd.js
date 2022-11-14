import React from "react";

const PostCurd = (props) => {
    return (
        <section style={styles.section}>
            <img style={styles.img} alt="C.U.R.D." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLa-Ru3fZwAasLggvIYb1I79qjkx1dGv4PelOoIjg1SUCnJF-CIDun2X41DO8Xvl_2I6s&usqp=CAU"/>
            <h2>CURD</h2>
            <ol>
                <li>Styles</li> 
                <li>Create HTML Elements</li> 
                <li>CURD</li>  
            </ol>
        </section>
    );
};

export default PostCurd;

const styles = {
  section: {
    width: "350px",
    padding: '10px',
    margin:'10px',
    float: "left",
    background:"rgba(100,115,100,0.5)"
  },
  img: {
    width: "100%",
    height: '150px',
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