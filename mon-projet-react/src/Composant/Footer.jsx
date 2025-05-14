import './Footer.scss'
import Kasalogofooter from '../assets/Kasalogofooter.png';

function Footer() {
    return (
        <>
        <div className='Footer'>

        <img src={Kasalogofooter} alt="logo kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
        </>
    )
}

export default Footer;