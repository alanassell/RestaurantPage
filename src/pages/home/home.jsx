import React from 'react'
import logo from '../../assets/BurgerLogo.png'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <section className='sectionHome'>
        <img src={logo} alt="Logo del restaurant" className='m-4'/>
        <h1 className='f30 fbold m-4'>HORARIOS DE ATENCION</h1>
        <p className='f20 m-4'>
            <span className='f20 fbold'>Mediodía:</span> De Lunes a Viernes de 12:00 a 15:00
            <br />  
            <span className='f20 fbold'>Noche:</span> TODOS LOS DIAS de 19:00 a 23:00
        </p>
        <Link to="/menu" className='a fbold f15 m-4'>VER MENU</Link>
    </section>
  )
}

export default Home