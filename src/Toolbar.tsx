import night from './assets/night.svg'
import './Toolbar.css'

function Toolbar(){
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-end', paddingBottom: '1rem', marginRight: '7rem'}}>
                {/* <p className='button_text'>Home</p> */}
                <p className='button_text'>About</p>
                {/* <p className='button_text'>Education</p> */}
                <p className='button_text'>Skills</p>
                <p className='button_text'>Experience</p>
                {/* <img src={night} className='button_text'></img> */}
            </div>
        </>
    )
}

export default Toolbar;