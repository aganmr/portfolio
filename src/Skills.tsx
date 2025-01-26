import { useState, useEffect } from "react";
import expansion from './assets/expansion-card-variant.svg'
import chevron from './assets/chevron-down.svg'
import mobile from './assets/tablet-cellphone.svg'
import cloud from './assets/cloud-tags.svg'
import toon2 from './assets/toon2.svg'
import c_icon from './assets/icons8-c-programming.svg'
import cpp_icon from './assets/icons8-c++.svg'
import bash_icon from './assets/icons8-bash.svg'
import python_icon from './assets/icons8-python.svg'
import js_icon from './assets/icons8-javascript.svg'
import ts_icon from './assets/icons8-typescript.svg'
import html_icon from './assets/icons8-html.svg'
import css_icon from './assets/icons8-css.svg'
import xd_icon from './assets/icons8-adobe-xd.svg'
import react_icon from './assets/icons8-react-native.svg'
import nodejs_icon from './assets/icons8-node-js.svg'
import aws_icon from './assets/icons8-aws.svg'
import gcp_icon from './assets/icons8-google-cloud-platform.svg'
import jira_icon from './assets/icons8-jira.svg'
import confluence_icon from './assets/icons8-confluence.svg'
import perforce_icon from './assets/perforce-icon.svg'
import tools from './assets/tools.svg'
import github_icon from './assets/github.svg'

function Skills(){
    const [collapsableOpened, setCollapsableOpened] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '6rem'}}>
                <div>
                    <h2 style={{textAlign: 'left'}}>Skills</h2>
                    <div style={{marginTop: '2.5rem'}} className='button_div'>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className='button_div2' onClick={()=>setCollapsableOpened(collapsableOpened != 1 ? 1 : 0)}>
                            <img src={expansion} width={'35px'}></img>
                            <div style={{marginLeft: '1rem', width: '100%'}}>
                                <p className='bold_text'>Embedded Firmware</p>
                                <p>4 years and ongoing</p>
                            </div>
                            <img src={chevron} style={{transform: collapsableOpened == 1 ? 'rotate(180deg)' : 'rotate(0deg)'}}></img>
                        </div>
                        {
                            collapsableOpened == 1 &&
                            <div style={{marginTop: '1.5rem'}}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={c_icon} width={'35px'}></img>
                                        <span className="tooltiptext">C Programming</span>
                                    </div>                                    
                                    <progress value={55} max={100} />
                                    <p><small><b>55%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.2rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={cpp_icon} width={'35px'}></img>
                                        <span className="tooltiptext">C++ Programming</span>
                                    </div>
                                    <progress value={10} max={100} />
                                    <p><small><b>10%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.2rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={bash_icon} width={'35px'}></img>
                                        <span className="tooltiptext">Bash Scripting</span>
                                    </div>
                                    <progress value={25} max={100} />
                                    <p><small><b>25%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.2rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={python_icon} width={'35px'}></img>
                                        <span className="tooltiptext">Python Programming</span>
                                    </div>
                                    <progress value={10} max={100} />
                                    <p><small><b>10%</b></small></p>
                                </div>
                            </div>             
                        }
                    </div>
                    <div style={{marginTop: '1.5rem'}} className='button_div' >
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className='button_div2' onClick={()=>setCollapsableOpened(collapsableOpened != 2 ? 2 : 0)}>
                            <img src={mobile} width={'35px'}></img>
                            <div style={{marginLeft: '1rem', width: '100%'}}>
                                <p className='bold_text'>Front-end Technologies</p>
                                <p>1 year</p>
                            </div>                            
                            <img src={chevron} style={{transform: collapsableOpened == 2 ? 'rotate(180deg)' : 'rotate(0deg)'}}></img>
                        </div>
                        {
                            collapsableOpened == 2 &&
                            <div style={{marginTop: '1.5rem'}}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={react_icon} width={'35px'}></img>
                                        <span className="tooltiptext">React Native</span>
                                    </div>                                    
                                    <progress value={35} max={100} />
                                    <p><small><b>35%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={js_icon} width={'35px'}></img>
                                        <span className="tooltiptext">JavaScript</span>
                                    </div>                                    
                                    <progress value={35} max={100} />
                                    <p><small><b>35%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.2rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={ts_icon} width={'35px'}></img>
                                        <span className="tooltiptext">TypeScript</span>
                                    </div>
                                    <progress value={10} max={100} />
                                    <p><small><b>10%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.2rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={html_icon} width={'35px'}></img>
                                        <span className="tooltiptext">HTML</span>
                                    </div>                                    
                                    <progress value={5} max={100} />
                                    <p><small><b>05%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.2rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={css_icon} width={'35px'}></img>
                                        <span className="tooltiptext">CSS</span>
                                    </div>                                    
                                    <progress value={5} max={100} />
                                    <p><small><b>05%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.2rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={xd_icon} width={'35px'}></img>
                                        <span className="tooltiptext">Adobe XD</span>
                                    </div>                                    
                                    <progress value={10} max={100} />
                                    <p><small><b>10%</b></small></p>
                                </div>
                            </div>              
                        }
                    </div>
                    <div style={{marginTop: '1.5rem'}} className='button_div' >
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className='button_div2' onClick={()=>setCollapsableOpened(collapsableOpened != 3 ? 3 : 0)}>
                        <img src={cloud} width={'35px'}></img>
                            <div style={{marginLeft: '1rem', width: '100%'}}>
                                <p className='bold_text'>Back-end Technologies</p>
                                <p>1 year</p>
                            </div>                            
                            <img src={chevron} style={{transform: collapsableOpened == 3 ? 'rotate(180deg)' : 'rotate(0deg)'}}></img>
                        </div>
                        {
                            collapsableOpened == 3 &&
                            <div style={{marginTop: '1.5rem'}}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={nodejs_icon} width={'35px'}></img>
                                        <span className="tooltiptext">Node JS</span>
                                    </div>                                    
                                    <progress value={75} max={100} />
                                    <p><small><b>75%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={aws_icon} width={'35px'}></img>
                                        <span className="tooltiptext">Amazon Web Services</span>
                                    </div>                                    
                                    <progress value={15} max={100} />
                                    <p><small><b>15%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.2rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={gcp_icon} width={'35px'}></img>
                                        <span className="tooltiptext">Google Cloud Platform</span>
                                    </div>                                    
                                    <progress value={10} max={100} />
                                    <p><small><b>10%</b></small></p>
                                </div>
                            </div>              
                        }
                    </div>
                    <div style={{marginTop: '1.5rem'}} className='button_div' >
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className='button_div2' onClick={()=>setCollapsableOpened(collapsableOpened != 4 ? 4 : 0)}>
                        <img src={tools} width={'35px'}></img>
                            <div style={{marginLeft: '1rem', width: '100%'}}>
                                <p className='bold_text'>Productivity/Utility Tools</p>
                                <p>2018 - Present</p>
                            </div>                            
                            <img src={chevron} style={{transform: collapsableOpened == 4 ? 'rotate(180deg)' : 'rotate(0deg)'}}></img>
                        </div>
                        {
                            collapsableOpened == 4 &&
                            <div style={{marginTop: '1.5rem'}}>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={jira_icon} width={'32px'}></img>
                                        <span className="tooltiptext">JIRA</span>
                                    </div>                                    
                                    <progress value={32} max={100} />
                                    <p><small><b>32%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.2rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={confluence_icon} width={'32px'}></img>
                                        <span className="tooltiptext">Confluence</span>
                                    </div>                                    
                                    <progress value={32} max={100} />
                                    <p><small><b>32%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.3rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={perforce_icon} width={'32px'}></img>
                                        <span className="tooltiptext">Perforce</span>
                                    </div>                                    
                                    <progress value={32} max={100} />
                                    <p><small><b>32%</b></small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', marginTop: '0.3rem', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className="tooltip">
                                        <img src={github_icon} width={'30px'}></img>
                                        <span className="tooltiptext">GitHub</span>
                                    </div>
                                    <progress value={4} max={100} />
                                    <p><small><b>04%</b></small></p>
                                </div>
                            </div>
                        }
                    </div>
                    <h2 style={{textAlign: 'left', paddingTop: '5rem'}}>Experience</h2>
                </div>
                {
                    width > 461 && <img src={toon2} width="29%" style={{alignSelf: 'start', marginTop: '8rem'}}></img>
                }                
            </div>
        </>
    )
}

export default Skills;

