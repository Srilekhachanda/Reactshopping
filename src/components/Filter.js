import React from 'react'
// import maxwidth from '../images/max-width_header.jpg'
import "../Style/Color.css"






function Filters() {
    return (
        <div className='container'>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <div>
                        <h5>Filters</h5>
                    </div>
                    <div>
                        <h6>Attribute</h6>
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        {/* <img src={maxwidth}/> */}
                        <div className='showmor'>
                            <a href="#show" className="">
                                <p>show more</p>
                            </a>
                        </div>
                        <hr />
                    </div>
                    <div>
                        <h6>Attribute</h6>
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <hr />
                    </div>


                    <div>
                        <div>
                            <h6>Color</h6>
                        </div>
                        <div className='colorfilter'>
                            <div className="red_div"></div><br />
                            <div className="red_div1"></div>
                            <div className="red_div2"></div>
                            <div className="red_div3"></div>
                        </div>
                        <br />
                        <div className='colorfilter'>
                            <div className="red_div4"></div><br />
                            <div className="red_div5"></div>
                            <div className="red_div6"></div>
                            <div className="red_div7"></div>
                        </div>
                        <br />
                        <div className='colorfilter'>
                            <div className="red_div8"></div><br />
                            <div className="red_div9"></div>
                            

                        </div>


                    </div>

<hr/>
                    <div>
                        <h6>Attribute</h6>
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <input type="checkbox" id="option" name="option" value="option" />
                        <label>Option</label> <br />
                        <hr />
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--9">
  
                </div>

            </div>
        </div>
    )
}

export default Filters