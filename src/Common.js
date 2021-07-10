import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

const Common = (props) =>{
  return(
   <section id="header" className="d-flex align-items-center">
      <div className="container nav bg">
        <div className='row'>
          <div className="col-10 mx-auto">
            <div className='row'>
            <div className="col-md-6 mt-5 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1 >{props.heading} <strong className='brand-name'>Aakash Prasad</strong></h1>
              <h2 className="my-3">{props.text}</h2>
              <div className='mt-3'>
                <NavLink to={props.visit} className="button btn btn-outline-primary">{props.btnName}</NavLink>
              </div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 header-img'>
              <img src={props.imgSrc} className="img-fluid animated" alt="head image"  />
            </div>
            </div>
          </div>
        </div>
      </div>
   </section>
  );
}

export default Common;