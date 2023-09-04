import React from 'react'
import Emailform from "./Email"
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footbar = () => {
    return (
        <div className='footcontainer'>
            <div className='footer'>
                <Emailform />
                <div className='data'>
                    <div className="dataContainer">
                        <h2 className='footerLink'>Contacts</h2>
                        <ul>
                            <li className="contactStuff"><PhoneIcon /> <p><a href="tel:+355 69 757 2759">+355 69 757 2759</a></p></li>
                            <li className="contactStuff"><PhoneIcon /> <p><a href='tel:+355 67 249 2461'>+355 67 249 2461</a></p></li>
                            <li className="contactStuff"><EmailIcon /> <p>hhmedia.int@gmail.com</p></li>
                            <li className="contactStuff"><InstagramIcon /> <p>H&HMedia</p></li>
                        </ul>
                    </div>
                    <div className="dataContainer">
                        <h2 className='footerLink'>Links</h2>
                        <ul>
                            <li className='footercolor'><a href="#home">Home</a></li>
                            <li className='footercolor'> <a href="#gallery">Gallery</a></li>
                            <li className='footercolor'><a href="#pricing">Pricing</a></li>
                            <li className='footercolor'><a href="#about">About us</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            < div className="acknowledgements" >
                <h3>Copyright Ⓒ H&H Media 2023</h3>
                <h3 className="lmg"> <a href="https://cycluscorporations.com"> Powered by Cyclus Corporations </a><Image src="/cycluslogo.jpg" width="50" height="50" alt="logo" className="navimg footimg" /></h3>
            </div >

        </div>
    )
}

export default Footbar