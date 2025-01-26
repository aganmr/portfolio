import { useState, useEffect } from "react";
import profile from './assets/profile.svg'
import linkedin from './assets/linkedin.svg'
import gmail from './assets/gmail.svg'
import github from './assets/github.svg'

function Landing(){
    const [width, setWidth] = useState(window.innerWidth);
        
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <>
            {
                width > 461 ?
                <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '2rem'}}>
                    <div style={{justifyItems: 'flex-start'}}>
                        <h1 className='typewriter_h1'>Hi, I'm Mark</h1>
                        <h2 className='secondary_text' style={{textAlign: 'start'}}>Software Engineer</h2>
                        <p>
                            Experienced in <b>Embedded Firmware</b> and <br/>
                            <b>Mobile Applications</b> development <br/>
                            based in Consolacion, Cebu PH <br/>
                        </p>
                        <div style={{paddingTop: '4rem'}}>
                            <a href="https://www.linkedin.com/in/mark-rey-agan/" target="_blank">
                                <img src={linkedin} style={{marginRight: '2rem'}} className='icon_button icon_button_delay_anim1'></img>
                            </a>
                            <a href="mailto:markagan07@gmail.com">
                                <img src={gmail} style={{marginRight: '2rem'}} className='icon_button icon_button_delay_anim2'></img>
                            </a>
                            <a href="https://github.com/markurei" target="_blank">
                                <img src={github} className='icon_button icon_button_delay_anim3'></img>
                            </a>
                        </div>
                    </div>
                    <img src={profile} width="40%" className='main_pic'></img>
                </div> :
                <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'flex-start', marginTop: '2rem'}}>
                    <img src={profile} width="100%" className='main_pic'></img>
                    <div>
                        <div style={{paddingTop: '1rem', paddingBottom: '4rem'}}>
                            <a href="https://www.linkedin.com/in/mark-rey-agan/" target="_blank">
                                <img src={linkedin} style={{marginRight: '2rem'}} width={'10%'} className='icon_button icon_button_delay_anim1'></img>
                            </a>
                            <a href="mailto:markagan07@gmail.com">
                                <img src={gmail} style={{marginRight: '2rem'}} width={'10%'} className='icon_button icon_button_delay_anim2'></img>
                            </a>
                            <a href="https://github.com/markurei" target="_blank">
                                <img src={github} width={'10%'} className='icon_button icon_button_delay_anim3'></img>
                            </a>
                        </div>
                        <h1 className='typewriter_h1'>Hi, I'm Mark</h1>
                        <h2 className='secondary_text' style={{textAlign: 'start'}}>Software Engineer</h2>
                        <p>
                            Experienced in <b>Embedded Firmware</b> and <br/>
                            <b>Mobile Applications</b> development <br/>
                            based in Consolacion, Cebu PH <br/>
                        </p>
                        
                    </div>
                    
                </div>
            }
            
        </>
    )
}

export default Landing;