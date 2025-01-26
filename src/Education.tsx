import line from './assets/line.svg'
import calendar from './assets/calendar-month.svg'

function Education(){
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifySelf: 'flex-start', marginLeft: '8rem', paddingTop: '5rem'}}>
                <h2 style={{textAlign: 'left'}}>Education</h2>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '2rem'}}>
                    <div >
                        <p style={{marginTop: 0, marginBottom: 0}} className='bold_text'>
                            Punta National High School
                        </p>
                        <p>
                            Punta, Dipolog City
                        </p>
                        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
                            <img src={calendar}></img>
                            <p style={{marginTop: '0.3rem', marginBottom: 0, marginLeft: '0.5rem'}}>2012</p>
                        </div>
                    </div>
                    <img src={line} style={{marginLeft: "2rem", paddingTop: '3rem'}}></img>
                    <div style={{marginLeft: "3rem", marginTop: '12rem'}}>
                        <p style={{marginTop: 0, marginBottom: 0}} className='bold_text'>
                            Cebu Institute of Technology - University
                        </p>
                        <p>
                            Bachelors of Science in Computer Engineering
                        </p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <img src={calendar}></img>
                            <p style={{marginTop: '0.3rem', marginBottom: 0, marginLeft: '0.5rem'}}>2017</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;