import React from "react";

const Contact = (props) => {
    function handleClick(e) {
    e.preventDefault();
    const div = document.getElementById('div',)
    const thanks = document.createElement('h6',)
    thanks.innerText = 'Thanks for your messgae!';
    div.appendChild(thanks)
    console.log(thanks);
  }
    
    return (
    <form style={styles.form} onClick={handleClick}>
        <h1 style={styles.title}>Contact Me</h1>
        <p >
            <input style={styles.contactInfo} type="text" name="email" id="email" placeholder="Email Address" />
        </p>
        
		<p style={styles.flex}>
            <input style={styles.contactInfo} type="text" name="name"  placeholder="First Name" />
            <input style={styles.contactInfo} type="text" name="name"  placeholder="Last Name" />
        </p>
        <p>
            <textarea style={styles.contactMessage} name="comment" id="comment" placeholder="Leave a Comment"></textarea>
        </p> 
        <div  style={styles.thanks} id="div">
            <button style={styles.button} type="submit">Send Message</button>
        </div>
            
            
    </form>
    );
};

export default Contact;



const styles = {
    form: {
        width: "65%",
        margin:'10px auto',
        background:"rgba(100,115,100,0.5)",
        padding: '25px'
    },
    title: {
        background:"rgba(100,115,100,0.5)",
        padding:"20px",
        fontSize:"2rem",
        textAlign: "center"
    },
    contactInfo: {
        width: "100%",
        height: '25px',
        margin:'auto',
        color: 'black',
        fontWeight: '500',
        fontSize: '.8rem',
        borderRadius: '5px',
        textAlign:'left',
        fontFamily:'Times New Roman, Georgia, Palatino Linotype',
    },
    contactMessage: {
        width: "100%",
        height: '100px',
        color: 'black',
        fontWeight: '100',
        fontSize: '0.8rem',
        textAlign:'left',
        margin:'auto',
        fontFamily:'Times New Roman, Georgia, Palatino Linotype'
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        width: "100%",
        padding: '2px'
    },
    thanks: {
        width: '100%',
        margin:'20px auto',
        color: '#ffffff',
        textTransform: 'uppercase',
        fontFamily:'Times New Roman, Georgia, Palatino Linotype',
        fontWeight: '600',
        fontSize: '1.5rem',
        textAlign:"center"
    },
    button: {
        display: 'block',
        width: '55%',
        padding: '1rem',
        margin:'0 auto',
        background: '#97b0a2',
        color: '#ffffff',
        textTransform: 'uppercase',
        fontFamily:'Times New Roman, Georgia, Palatino Linotype',
        fontWeight: '100',
        borderRadius: '30px 30px 30px 30px',
    },
}