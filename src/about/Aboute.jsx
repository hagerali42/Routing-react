
import React from 'react'
export default function About(){
  return(
    <section className="text-white mb-0 pt-5" id="about">
    <div className="container">
       
         <div className='header' style={{color:'#fff'}}>
                  <h2 className=" text-center text-uppercase mb-0 " style={{color:'#fff',fontSize:'3rem'}}>About</h2>
                  <div className="heeder-icon ">
                    <div className="line "  style={{backgroundColor:'#fff'}}></div>
                    <i className="fas fa-star  fs-1 "style={{color:'#fff'}} ></i>  
                    <div className="line "  style={{backgroundColor:'#fff'}}></div>
                </div>
                
          </div>
       
        <div className="row justify-content-center pt-3">
            <div className="col-lg-4 ml-auto"><p class="lead">Freelancer is a free bootstrap theme created by Route. The download includes
             the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
             </p></div>
            <div className="col-lg-4 mr-auto"><p class="lead">You can create your own custom avatar for the masthead, change the icon 
            in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
        </div>
      
    
    </div>
</section>
  )

}