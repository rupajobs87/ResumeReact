import './HomePage.css'
import rupa from './img/Rupa.jpg'
function HomePage(){
    
    return (
        <div className='container' style={{alignContent: 'center'}}>
            <div className='row'>
                <div className='col-3'>
                    <img src={rupa} alt='Rupa' style={{width: '95%' , height: '95%', padding:'20px'}}></img>
                </div>
                <div className='col-9 App-Font' style={{alignContent:'center', padding:'40px'}} >
                    Over 11 years’ rich and cross-cultural experience with strong background in end-to-end Software Product Development Lifecycle; specialization in Java/J2ee, Android, Oracle ADF platforms  Targeting assignments as a Developer with a leading organization, located in Dubai UAE
                </div>
            </div>
        </div>
    );
}

export default HomePage