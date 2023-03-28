import React from 'react'
export default function Contact (){
 
    return(
      <section className="pt-5" id="contact">
            <div className="container">
                <div className='header' style={{color:'#2c3e50'}}>
                  <h2 className=" text-center text-uppercase mb-0 "  style={{color:'#2c3e50',fontSize:'3rem'}}>Contact Me</h2>
                  <div className="heeder-icon ">
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                    <i className="fas fa-star  fs-1 "style={{color:'#2c3e50'}} ></i>  
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                </div>
                
              </div>
                
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                  
                                    <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                   
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br/>
                            <div id="success"></div>
                            <div className="form-group"><button  className="btn  btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
  

}