import style from './parent.module.css';
import patient from '../../assets/patient/patient.png';
import tick from '../../assets/patient/tick.png';


export default function Parent(){
    return(
        <div className={style.parentWrapper}>
            <div>
                <img src={patient} alt='patient image'/>
            </div>
            <div className={style.texts}>
                <h4>HELPING PATIENTS FROM AROUND THE GLOBE!!</h4>
                <span className={style.one}>Patient</span> 
                <span className={style.two}>Caring</span>
                <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                
                <div className={style.pointsWrapper}>
                    <div className={style.point}>
                        <img src={tick}/>
                        <p >Stay Updated About Your Health</p>
                    </div>
                    <div className={style.point}>
                        <img src={tick}/>
                        <p >Check Your Results Online</p>
                    </div>
                    <div className={style.point}>
                        <img src={tick}/>
                        <p >Manage Your Appointments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}