import classes from './AboutMe.module.css';


const AboutME =(props)=>{


    return(
        <div>
            <h1 className={classes.ed}>Education</h1>
            <br />
            <ul className={classes.ed1}>
             <li>BTech, IIIT Bhubaneswar</li>
               Computer Engineering , 2026 
               <br />
               <br />
            <li> 12th - Adarsh Inter College</li>
            </ul>
        </div>
    )

}

export default AboutME;