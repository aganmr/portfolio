import { useState, useEffect } from "react";
import toon1 from './assets/toon1.svg'
import check_outline from './assets/check-circle-outline.svg'
import circle_outline from './assets/record-circle-outline.svg'

function About(){
    const [width, setWidth] = useState(window.innerWidth);
        
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '4rem'}}>
                {
                    width > 461 && <img src={toon1} width="30%"></img>
                }
                <div style={{width: width > 461 ?'35%' : '100%'}}>
                    <h2 style={{textAlign: 'left'}}>About</h2>
                    <p style={{marginTop: '2rem'}}>
                        My name is <b>Mark Rey Agan</b>. I am constantly
                        seeking for new interests and opportunities
                        for growth and am not one to shy away from challenges.
                        <br/><br/>
                        Whether it’s tackling complex problems at work,
                        taking on new and exciting projects, or pursuing
                        personal goals, I embrace each challenge with
                        enthusiasm and determination.
                    </p>
                    <div style={{marginTop: '2rem'}}>
                        <p><b><small>Experience Overview</small></b></p>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '1rem'}}>
                            <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                            <p><small>Linux Kernel and Bootloader Firmware</small></p>
                        </div> 
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>                                        
                            <p><small>React Native Mobile Development</small></p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>                                        
                            <p><small>UI/UX Designing</small></p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>                                        
                            <p><small>Outdoor and indoor positioning/tracking</small></p>
                        </div>
                    </div>
                    <div style={{marginTop: '2rem'}}>
                        <p><b><small>Personal Interests for 2025</small></b></p>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '1rem'}}>
                            <img src={circle_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                            <p><small>IoT Home Automation</small></p>
                        </div> 
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <img src={circle_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>                                        
                            <p><small>Software Exploitation and Security</small></p>
                        </div>
                    </div>
                    {/* <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '1rem'}} className="shake"> */}
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '1rem'}}>
                        <h1 style={{textAlign: 'left', color: '#FBA547', fontSize: '3.5rem', marginRight: '0.5rem'}}>6+</h1>
                        <p>Years of Industry<br/>Experience</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;