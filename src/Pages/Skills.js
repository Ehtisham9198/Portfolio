import classes from './Skills.module.css';

const Skills =()=>{


    return(
        <div>
            <h2 className={classes.skil}>Skills</h2>
            <ul className={classes.ed1}>
            <h2>Languages</h2>
             <li>JavaScript</li>                        
             <li>HTML</li>                        
             <li>CSS</li>                        
             <li>C</li>                        
             <li>C++</li>                        
            </ul>
            
            <ul className={classes.ed11}>
            <h2>Tools</h2>
             <li>Git</li>                        
             <li>GitHub</li>                        
             <li>Azure</li>                                               
            </ul>

          
            <h2 className={classes.frame}>Frameworks & Libraries</h2>
            <ul className={classes.ed111}>
             <li>React.js</li>                        
             <li>Node.js</li>                                                                      
            </ul>
        </div>
    )


}

export default Skills;