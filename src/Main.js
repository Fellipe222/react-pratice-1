
import React from 'react'
import image_profile from './img/profile_image.png'
import image_github from './img/github-sign.png'
import image_instagram from './img/instagram.png'
import image_linkedin from './img/linkedin.png'
import image_whatsapp from './img/whatsapp.png'
import image_email from './img/mail.png'


function ProfileImg() {
    return(
        <header>
            <div className='profile_wrapper'>
                <img src={image_profile} alt='Profile' className='profile_img'></img>
                <h2>Fellipe Barros</h2>
                <h4>React student</h4>
            </div>
        </header>
    )
}

function Contacts() {
    return(
        <div className='contacts'>      
            <a href='mailto:fellipe.engmec@gmail.com' target='_blank' rel="noreferrer" className='email'>
                <div>
                    <img src={image_email} alt='mail icon'></img>
                    Email
                </div>   
            </a>
            <a href='https://www.linkedin.com/in/fellipe-dev/' target='_blank' rel="noreferrer" className='linkedin'> 
                <div>
                    <img src={image_linkedin} alt='LinkedIn icon'></img>
                    LinkedIn
                </div>
            </a>            
        </div>
    )
}

function About() {
    return(
        <div className='about'>
            <p>Engenheiro por formação, curioso por natureza.</p> 

            <p>Há praticamente dois anos no ramo de tecnologia, venho utilizando Python como linguagem principal e suas
            libs (Pandas, Flask, FastAPI, Django, SQLAlchemy, PyAutoGUI, Kivy, KivyMD, requests, BeaultifulSoup, Selenium entre outras).</p> 
            
            <p>Experiência com bancos de dados relacionais (PostgresSQL & MySQL) e ambiente Linux.</p> 
            
            <p>Inglês fluente e espanhol básico.</p>
        </div>
    )
}

function Footer(){
    return(
        <footer>
            <a href='https://github.com/Fellipe222'>
                <img src={image_github} alt='GitHub icon'></img>
            </a>
            <a href='https://www.instagram.com/barrosf92/'>
                <img src={image_instagram} alt='Instagram icon'></img>
            </a>
            <a href='https://api.whatsapp.com/send/?phone=5513996222498'>
                <img src={image_whatsapp} alt='WhatsApp icon'></img>
            </a>
        </footer>
    )
}
export default function Main() {
    return(
        <main>
            <div className='wrapper'>
                <ProfileImg />
                <Contacts />
                <About />
                <Footer />
            </div>    
        </main>
    )
}
