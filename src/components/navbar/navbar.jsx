import style from './navbar.module.css'
import Logo from '../../assets/logo.png'
import Button from '../button/button'


export default function Navbar(){
    return(
        <div className={style.navbar}>

            <div className={style.logo}>

                <img src={Logo}></img>
                <span className={style.logoName}>Medify</span>

            </div>

            <div className={style.navbarList}>

                <ul>
                    <li>Find Doctor</li>
                    <li>Hospital</li>
                    <li>Medicines</li>
                    <li>Surgeries</li>
                    <li>Software for Provider</li>
                    <li>Facilities</li>
                    <li><Button text="My Bookings"/></li>
                </ul>

            </div>

        </div>
    )
}