import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMessage, AiFillHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { VscBell } from "react-icons/vsc";
import { MdOutlineAccountCircle } from "react-icons/md";


const Header = (props) => {
    return (
        <header style={styles.myHeader}>
            <div style={styles.left}>
                <img src="https://images.unsplash.com/photo-1571391733814-15ac29ac3544?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2344&q=80" alt="Logo" style={styles.logo} />
                <h1 >RDS </h1>
            </div>
            <div style={styles.rightSide}>
                <Link to='/home' style={styles.icons} ><AiFillHome /> </Link>
                <CgMenuGridR style={styles.icons}/>
                <AiOutlineMessage style={styles.icons}/>
                <VscBell style={styles.icons}/>
                <MdOutlineAccountCircle style={styles.icons}/>
            </div>
        </header>
    );
};

export default Header;

const styles = {
    myHeader: {
        background:"rgba(100,115,100,0.75)",
        padding: "1%",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: ".75rem",
    },
    left: {
        display: "flex",
        flexDirection: "row",
        gap:"5%"
    },
    logo: {
        width: "50px",
        height: "50px",
        padding: "2px",
        borderRadius: "50%",
        alignItems: "center",
    },
    icons: {
        fontSize:"1.75rem",
        padding: "2.5px",
        color: "white"
    },
    rightSide: {
        display: "flex",
        flexDirection: "row",
        textAlign: 'center',
        gap:'3%'
    },
};