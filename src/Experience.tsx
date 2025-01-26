import { useState, useEffect } from "react";
import line from './assets/line.svg'
import calendar from './assets/calendar-month.svg'
import map from './assets/maps-1.svg'
import google_play from './assets/google_play_link.svg'
import app_store from './assets/app_store_link.svg'
import unreleased_1 from './assets/unreleased_1.svg'
import unreleased_2 from './assets/unreleased_2.svg'
import printer from './assets/printer.svg'
import app from './assets/app.svg'
import configurator from './assets/configurator.svg'
import indoor_map from './assets/indoor.svg'
import python_app from './assets/python_app.png'
import github_repo_link from './assets/github_link.svg'
import youtube_link from './assets/youtube_link.svg'
import chevron from './assets/chevron-down.svg'
import check_outline from './assets/check-circle-outline.svg'

function Experience(){
    const [collapsableOpened, setCollapsableOpened] = useState(4);
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {                
                width > 461 ?
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '2rem', justifySelf: 'center', width: '700px'}}>
                    <div>
                        <p style={{marginTop: 0, marginBottom: 0}} className='bold_text'>
                            Spingine Corporation
                        </p>
                        <p style={{marginTop: '0.2rem', fontStyle: 'italic'}}>A start-up company based in Cebu City, PH</p>
                        <p style={{marginTop: '1rem', marginBottom: '0.3rem'}}>Mobile Applications Developer</p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <img src={calendar}></img>
                            <p style={{marginLeft: '0.5rem'}}>2018 - 2020</p>
                        </div>
                    </div>
                    <img src={line} style={{marginLeft: "2rem"}}></img>
                    <div style={{marginLeft: "3rem", marginTop: '12rem'}}>
                        <p style={{marginTop: 0, marginBottom: 0}} className='bold_text'>
                            Kyocera Document Solutions Development PH
                        </p>
                        <p style={{marginTop: '0.2rem', fontStyle: 'italic'}}>An nternational company based in Osaka, Japan</p>
                        <p style={{marginTop: '1rem', marginBottom: '0.3rem'}}>Embedded Firmware Engineer</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                            <img src={calendar}></img>
                            <p style={{marginLeft: '0.5rem'}}>2021 - Present</p>
                        </div>
                    </div>
                </div> :
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '2rem'}}>
                    <img src={line} style={{marginRight: '1rem', alignSelf: 'flex-start'}}></img>
                    <div>
                        <div>
                            <p style={{marginTop: 0, marginBottom: 0}} className='bold_text'>
                                Spingine Corporation
                            </p>
                            <p style={{marginTop: '0.2rem', fontStyle: 'italic'}}>A start-up company based in Cebu City, PH</p>
                            <p style={{marginTop: '1rem', marginBottom: '0.3rem'}}>Mobile Applications Developer</p>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <img src={calendar}></img>
                                <p style={{marginLeft: '0.5rem'}}>2018 - 2020</p>
                            </div>
                        </div>
                        <div style={{marginTop: '2rem'}}>
                            <p style={{marginTop: 0, marginBottom: 0}} className='bold_text'>
                                Kyocera Document Solutions Development PH
                            </p>
                            <p style={{marginTop: '0.2rem', fontStyle: 'italic'}}>An international company based in Osaka, Japan</p>
                            <p style={{marginTop: '1rem', marginBottom: '0.3rem'}}>Embedded Firmware Engineer</p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                <img src={calendar}></img>
                                <p style={{marginLeft: '0.5rem'}}>2021 - Present</p>
                            </div>
                        </div>
                    </div>
                </div>                
            }
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: '10rem'}}>
                <div>
                    <div style={{textAlign: 'left', marginTop: '4rem'}}>
                        <p className='bold_text'>
                            Firmware Engineer 
                            <span style={{color: '#FBA547'}}> @ Kyocera</span>
                        </p>
                        <p>Low and High-end Printer Firmware</p>
                    </div>
                    <div style={{marginTop: '2.5rem', }} className='button_div'  >
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className='button_div2' onClick={()=>setCollapsableOpened(collapsableOpened != 1 ? 1 : 0)}>
                            <div style={{width: '100%'}}>
                                <p className='bold_text'>Team Leader Responsibilities</p>
                                <p>OS Leader for New Printer Models</p>
                            </div>
                            <img src={chevron} style={{transform: collapsableOpened == 1 ? 'rotate(180deg)' : 'rotate(0deg)'}}></img>
                        </div>
                        {
                            collapsableOpened == 1 &&
                            <div style={{marginTop: '1.5rem', marginLeft: '1rem'}}>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                    <p><small>Support the Project Leader during the entire lifecycle of firmware development</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                    <p><small>Oversee sprints for OS tasks and encourage/support team members to meet the overall schedule set by the Project Leader</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                    <p><small>Provide guidance and support team members on technical issues during implementations</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                    <p><small>Manage and coordinate the work of team members and escalate issues with high risks or impact in project schedule to Project Leader </small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                    <p><small>Coordinate with team component leaders in task schedule creation to meet the milestones set by the Project Leader</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                    <p><small>Prepare documents and progress tracking materials for reporting the weekly status and  other concerns to  Project Leaders and higher-ups</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                    <p><small>Ensure that the firmware developed meets the required specifications, conducting code reviews, and supporting in test scenario creations</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                    <p><small>Encourage innovation within the team and generate new ideas for improvements with  code efficiency and performance in mind</small></p>
                                </div>
                            </div>
                        }
                    </div>
                    <div style={{marginTop: '1.5rem'}} className='button_div' >
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className='button_div2' onClick={()=>setCollapsableOpened(collapsableOpened != 2 ? 2 : 0)}>
                            <div style={{width: '100%'}}>
                                <p className='bold_text'>Linux OS Drivers Handled</p>
                                <p>Kernel and Bootloader Drivers</p>
                            </div>                            
                            <img src={chevron} style={{transform: collapsableOpened == 2 ? 'rotate(180deg)' : 'rotate(0deg)'}}></img>
                        </div>
                        {
                            collapsableOpened == 2 &&
                            <div style={{marginTop: '1.5rem', marginLeft: '1rem'}}>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Automatic Memory Check (AMC)</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Real Time Clock (RTC)</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>General-Purpose Input/Output (GPIO)</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Non-volatile Flash Storage (NAND)</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Non-volatile SD Card Storage (MMC)</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Trusted Module Platform (TPM)</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Internet Protocol Security (IPsec)</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Ethernet and WLAN</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Board bring-up for new Printer models</small></p>
                                </div>
                            </div> 
                        }
                    </div>
                    <div style={{textAlign: 'left', marginTop: '4rem'}}>
                        <p className='bold_text'>
                            Mobile App Developer 
                            <span style={{color: '#FBA547'}}> @ Spingine</span>
                        </p>
                        <p>Asset Tracking and Logistics App</p>
                    </div>
                    <div style={{marginTop: '2.5rem'}} className='button_div' >
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className='button_div2' onClick={()=>setCollapsableOpened(collapsableOpened != 3 ? 3 : 0)}>
                            <div style={{width: '100%'}}>
                                <p className='bold_text'>Back-end APIs Developed</p>
                                <p>APIs for Asset Tracking</p>
                            </div>
                            <img src={chevron} style={{transform: collapsableOpened == 3 ? 'rotate(180deg)' : 'rotate(0deg)'}}></img>
                        </div>
                        {
                            collapsableOpened == 3 &&
                            <div style={{marginTop: '1.5rem', marginLeft: '1rem'}}>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Register new assets</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Get asset information</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Update/delete existing assets</small></p>
                                </div>                                
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Register new vehicle drivers</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Get vehicle driver information</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Update/delete existing vehicle drivers</small></p>
                                </div>                                
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                    <p><small>Get nearby assets from a location</small></p>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                    <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                    <p><small>Get existing geofence data from a location</small></p>
                                </div>
                            </div>     
                        }
                    </div>
                    <div style={{marginTop: '1.5rem'}} className='button_div' >
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className='button_div2' onClick={()=>setCollapsableOpened(collapsableOpened != 4 ? 4 : 0)}>
                            <div style={{width: '100%'}}>
                                <p className='bold_text'>Applications Developed</p>
                                <p>React Native Mobile Applications</p>
                            </div>                            
                            <img src={chevron} style={{transform: collapsableOpened == 4 ? 'rotate(180deg)' : 'rotate(0deg)'}}></img>
                        </div>
                        {
                            collapsableOpened == 4 &&
                            <div style={{marginTop: '3rem'}}>
                                <div>
                                    <img src={map} width={'300px'}></img>
                                    <div style={{display: 'flex', flexDirection: 'row', justifySelf: 'center', marginTop: '1rem', marginBottom: '1rem'}}>
                                        <a href="https://play.google.com/store/apps/details?id=com.spingine.xeleqt.tracker&hl=en" target="_blank" style={{marginRight: '1rem'}}>
                                            <img src={google_play} width={'120px'} ></img>
                                        </a>
                                        <a href="https://apps.apple.com/ph/app/xeleqt-mobility-manager/id6477284741" target="_blank">
                                            <img src={app_store} width={'120px'} ></img>
                                        </a>
                                    </div>                                    
                                    <p><small><b>GPS Asset Tracker</b></small></p>
                                    <p><small>Lead Developer and UI/UX Designer</small></p>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: '1rem'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                        <p><small>Uses GPS data for asset location and speed</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Uses <a href="https://developers.google.com/maps/documentation/javascript" target="_blank">Google Maps</a> overlay</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                        <p><small>Uses <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjbqbaB6u-KAxUtD0QIHXLYGxIYABAAGgJkeg&co=1&ase=2&gclid=CjwKCAiA7Y28BhAnEiwAAdOJULGoOmgHOJWilo9Ejq_L0YNm5GEjOL1HpMaNYHmPHuN3In5i5WM6jxoCHHAQAvD_BwE&ei=yYWDZ6m4E4no1e8P-_iAyAc&ohost=www.google.com&cid=CAESVuD29PYZJ_KJlVvIqccZ7wLoSKuDjmfpOzsGHPuCercoZBjRuODZ1r3tfzXKgrvzl6hBsSTCPdRrbbSkX7ON5xVkXXAiXCdHkwqeSV7-uNNERdn_iY65&sig=AOD64_09uxY-sVl9xZi-b-B3E6MkxmvaQA&q&sqi=2&nis=4&adurl&ved=2ahUKEwjpwKyB6u-KAxUJdPUHHXs8AHkQ0Qx6BAgLEAE" target="_blank">AWS Cognito</a> for user authentication</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Uses <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiduuav6u-KAxV_xUwCHcw0MegYABAAGgJ0bQ&co=1&ase=2&gclid=CjwKCAiA7Y28BhAnEiwAAdOJUCKZdl2jOW28bxJi2vPXfVf0HgeFSTN1PwkOCvDKeIgaV15ILs_lPxoCbLAQAvD_BwE&ohost=www.google.com&cid=CAESVuD2kX5UCDuza2sT1mqK71C5gDnQTnT3Sey9Fhr0ii9WblbEGTyx-B-mCHD2L1fcBy2Rrsi5cURsdBD7sIJbvutNGRPEkKChjOei5U3qrybSBxU86m2R&sig=AOD64_18niLC1u3eRRKiMbtyqi2Ogs1uGA&q&nis=4&adurl&ved=2ahUKEwj4neGv6u-KAxUsc_UHHWWJLxMQ0Qx6BAgMEAE" target="_blank">AWS DynamoDB</a> as database</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Uses <a href="https://aws.amazon.com/s3/" target="_blank">AWS S3</a> cloud storage for big data</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                        <p><small>Uses <a href="https://www.hivemq.com/blog/mqtt-essentials-part2-publish-subscribe/" target="_blank">MQTT (pub/sub)</a> for live data streaming</small></p>
                                    </div>
                                </div>
                                <div style={{marginTop: '3rem'}}>
                                    <img src={indoor_map} width={'300px'}></img>
                                    <div style={{display: 'flex', flexDirection: 'row', justifySelf: 'center', marginTop: '1rem', marginBottom: '1rem'}}>
                                        <img src={unreleased_1} width={'120px'}></img>
                                    </div>
                                    <p><small><b>High-Precision Indoor Tracker</b></small></p>
                                    <p><small>Solo Developer and UI/UX Designer</small></p>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '1rem'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Uses UWB for the actual position data</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Uses BluetoothLE for communication</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                        <p><small>Tracking hardware uses <a href="https://www.qorvo.com/products/p/DWM1001C" target="_blank">DWM1001C</a> module</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                        <p><small>Can setup the trackers as tags or anchors</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Uses <a href="https://threejs.org/" target="_blank">three.js</a> for map visualization</small></p>
                                    </div>
                                    
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Showed a working demo in a conference</small></p>
                                    </div>
                                </div>
                                <div style={{marginTop: '3rem'}}>
                                    <img src={configurator} width={'260px'}></img>
                                    <div style={{display: 'flex', flexDirection: 'row', justifySelf: 'center', marginTop: '1rem', marginBottom: '1rem'}}>
                                        <img src={unreleased_2} width={'120px'}></img>
                                    </div>
                                    <p><small><b>GPS Tracker Configurator</b></small></p>
                                    <p><small>Lead Developer and UI/UX Designer</small></p>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '1rem'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Uses WiFi connection for communication</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Can send commands to the GPS tracker</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Can setup initial settings of the tracker</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                        <p><small>Displays status and information of the tracker</small></p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div style={{textAlign: 'left', marginTop: '4rem'}}>
                        <p className='bold_text'>Personal Projects</p>
                        <p>Public projects that I have released</p>
                    </div>
                    <div style={{marginTop: '1.5rem'}} className='button_div' >
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className='button_div2' onClick={()=>setCollapsableOpened(collapsableOpened != 5 ? 5 : 0)}>
                            <div style={{width: '100%'}}>
                                <p className='bold_text'>Applications Developed</p>
                                <p>Linux Applications</p>
                            </div>                            
                            <img src={chevron} style={{transform: collapsableOpened == 5 ? 'rotate(180deg)' : 'rotate(0deg)'}}></img>
                        </div>
                        {
                            collapsableOpened == 5 &&
                            <div style={{marginTop: '3rem'}}>
                                <div>
                                    <img src={python_app} width={'300px'}></img>
                                    <div style={{display: 'flex', flexDirection: 'row', justifySelf: 'center', marginTop: '1rem', marginBottom: '1rem'}}>
                                        <a href="https://github.com/markurei/steam-input-disabler" target="_blank" style={{marginRight: '1rem'}}>
                                            <img src={github_repo_link} width={'120px'} ></img>
                                        </a>
                                        <a href="https://www.youtube.com/watch?v=RpT9S-KXoWw" target="_blank">
                                            <img src={youtube_link} width={'120px'} ></img>
                                        </a>
                                    </div>
                                    <p><small><b>Steam Input Disabler</b></small></p>
                                    <p><small>Developed on spare time</small></p>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: '1rem'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                        <p><small>Disables the Steam input for non-Steam games</small></p>
                                    </div> 
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>                                        
                                        <p><small>Created using Python and Tkinter</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Has an Appimage build for Linux</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Modifies directly the config files of Steam</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Auto detection of current logged-in user</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem'}}></img>
                                        <p><small>Created with the Steamdeck in mind</small></p>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                                        <img src={check_outline} width={'15px'} style={{marginRight: '0.5rem', marginTop: '5px'}}></img>
                                        <p><small>Created an installation tutorial on YouTube</small></p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {
                    width > 461 &&
                    <div style={{alignItems: 'start', marginTop: '8rem', display: 'flex', flexDirection: 'column', marginRight: '2rem'}}>
                        <img src={printer} width="60%" ></img>
                        <img src={app} width="60%" style={{marginTop: '8rem'}}></img>
                    </div>
                }                
            </div>
        </>
    )
}

export default Experience;