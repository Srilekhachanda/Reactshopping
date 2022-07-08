import React from 'react'
import "../Style/Her.css"
import maxwidth from "../Images/max-width_header.jpg"

function Hero() {
    return (
        <div className='container'>
            <div className='herosection'>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--4">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">women's</h5>
                          
                            <div className='lines'>
                            <img src={maxwidth}/> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--8">
                    
                        <div className="card-img">
                            <img src="https://images.unsplash.com/photo-1590639815345-f30dd48aba1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbCUyMGJlYXV0eXxlbnwwfHwwfHw%3D&w=1000&q=80" className="card-img-top" alt="" />
                       
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero