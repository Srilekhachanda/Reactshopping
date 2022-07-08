import React from 'react'
import "../Style/Signout.css"
import user from "../Images/user.jpg"
import arrowleft from "../Images/arrow-left.jpg"

function Signout() {
  return (
    <div className='container'>
         <div className="signout">
                            <ul>
                                <li>
                                    <img src={arrowleft} />
                                </li>
                                <li>
                                    <img src={user} />
                                </li>
                                <li>
                                    <h5>
                                        Account
                                    </h5>
                                </li>
                            </ul>

                        </div>
    <div> <a href="" className=""> <p>Order History</p> </a> </div>

    <div> <a href="" className=""> <p>Store Credit & Gift Cards</p> </a> </div>

    <div> <a href="" className=""> <p>Favorites Lists</p> </a> </div>

    <div> <a href="" className=""> <p>Address Book</p> </a> </div>

    <div> <a href="" className=""> <p>Saved Payments</p> </a> </div>

    <div> <a href="" className=""> <p>Communications</p> </a> </div>

   

<div> <a href="" className=""> <p>Account Information</p> </a> </div>

<div> <a href="" className=""> <p>Sign out</p> </a> </div>
    </div>
  )
}

export default Signout