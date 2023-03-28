import React from 'react'

export default function Footer() {
    return (
        <div className=''>
             <footer className="footer text-center pt-5 pb-5 " style={{backgroundColor:'#2c3e50',color:'#fff'}}>
            <div className="container">
                <div className="row text-center">
                   
                   <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4 fw-bold">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br/>
                            Clark, MO 65243
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>

                        <div className='d-flex justify-content-center ' >

                        <div className='icon  d-flex justify-content-center align-items-center mx-2'>
                        <i className="fab fa-fw fa-facebook-f "></i>
                        </div>
                        <div className='icon d-flex justify-content-center align-items-center  mx-2'>
                        <i className="fab fa-fw fa-twitter"></i>
                        </div>
                        <div className='icon d-flex justify-content-center align-items-center  mx-2'>
                        <i className="fab fa-fw fa-linkedin-in"></i>
                        </div>
                        <div className='icon d-flex justify-content-center align-items-center  mx-2'>
                        <i className="fab fa-fw fa-dribbble"></i>
                        </div>

                        </div>
                    </div>
                  
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                        </p>
                    </div>
                    
                   
                    
                </div>
            </div>
        </footer>
        <div class="copyright py-4 text-center text-white " style={{backgroundColor:'#1a252f'}}>
        <div class="container"><small>Copyright © Your Website 2021</small></div>
        </div>
        </div>
        
    )
}