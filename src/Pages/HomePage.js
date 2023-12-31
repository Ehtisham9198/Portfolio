import React from "react";
import classes from './HomePage.module.css';
import Mypic from './myphoto.jpg'

const HomePage=(props)=>{

    return(
        <div>
            <header>
            <span className={classes.Portfolio}> <h3><span className={classes.portfolio}> Ehtisham's</span> Portfolio </h3></span>
            <div  className={classes.HeaderButtons}>
            <button>Home</button>
            <button>About me</button>
            <button>Projects</button>
            <button>Testimonials</button>
            <button>Contacts</button>
            </div>
            </header>
            <h1 className={classes.welcome}> <span className={classes.wel}>Welcome</span> <span className={classes.to}> to My Website </span></h1>
            <h1 className={classes.name}>Hi, I'm <span className={classes.exactName}>Ehtisham</span><br /> a Software Developer</h1>
            <p className={classes.pahra}>I'm a passionate and skilled Software Developer. I have good experience of both Frontend and Backend development</p> 
            <img src={Mypic} alt="meri" className={classes.pic} />
        </div>
    );
}

export default HomePage;