import React, { useContext } from 'react'
import logo from '../../assets/BurgerLogo.png'
import './menu.css'
import { Accordion } from 'react-bootstrap'
import { MenuContext } from '../../context/menu'

const Menu = () => {
  const menu = useContext(MenuContext)

  const renderMenu = () => {
    return menu?.map((item, index) => {
      return (
        <Accordion.Item className='bgTrans mt-4' eventKey={`${index}`} key={index}>
          <Accordion.Header className='bgTrans'><h2 className='f20'>{item.nombre}</h2></Accordion.Header>
          <Accordion.Body className='bgTrans'>
            {item.contenido?.map((product, i)=>{
              return(
                <div key={i} className='m-3'>
                  <div className='d-flex contetProduct'>
                    <h4 className='f15 fbold'>{product.nombre}</h4>
                    <h4 className='f15 fbold'>${product.precio}</h4>
                  </div>
                  <p className='f15'>{product.descripcion}</p>
                </div>
              )
            })}
          </Accordion.Body>
        </Accordion.Item>
      )
    });
  }

  if (!menu) {
    return(  
        <section className='sectionMenu'>
          <img src={logo} alt="" />
          <div className='accordion'>
            <h2 className='f20'>Cargando menu...</h2>
          </div>
        </section>
    )
  }

  return (
    <section className='sectionMenu'>
        <img src={logo} alt="" />
          <Accordion className='accordion mt-5'>
            {renderMenu()}
          </Accordion>
    </section>
  )
}

export default Menu