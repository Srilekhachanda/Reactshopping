import React from 'react'
import "../Style/Nav.css"
import user from '../Images/user.jpg'
 import search from '../Images/search.jpg'
import shop from '../Images/shopping-bag.jpg'



function Navbar() {
  return (
    <>
    <div className='container'>
      <div className='nav_bar'>
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--3">
        
              <p>
                VENIA
              </p>
     
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--5">
            <div className='Nav'>
              <ul className="Navbar_Categories">
                <li><a href="#">Women</a></li>
                <li><a href="#">Men</a> </li>
                <li><a href="#">Smart Gear</a> </li>
                <li><a href="#">Accessories</a> </li>
              </ul>
            </div>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--4">
            <div className='navsearch'>
              <ul className="Navbar_List">
                <li> <img src={search} className='navImgOne' alt="img" /></li>
                <li><a href="#">Search</a></li>
                <li><img src={user} className='navImgOne' alt="img" /></li>
                <li><a href="#">Sign in</a> </li>
                <li><img src={shop} className='navImgOne' alt="img" /></li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className='hr'>

      </div>
      </>
  )
}

export default Navbar
