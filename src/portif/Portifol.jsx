import React, { useEffect ,useState} from 'react'
import cak from '../assets/cake.png'
import cabin from '../assets/cabin.png'
import circus from '../assets/circus.png'
import game from '../assets/game.png'
import safe from '../assets/safe.png'
import subm from '../assets/submarine.png'
export default function Portifol(){

  return(
    
    <section className=" portfolio pt-5 mb-5  " id="portfolio">
            <div className="container ">
              <div className='header' style={{color:'#2c3e50'}}>
                  <h2 className=" text-center text-uppercase mb-0 "  style={{color:'#2c3e50',fontSize:'3rem'}}>Portfolio</h2>
                  <div className="heeder-icon ">
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                    <i className="fas fa-star  fs-1 "style={{color:'#2c3e50'}} ></i>  
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                </div>
                
              </div>
              <div class="row  row-cols-1 row-cols-md-2 row-cols-lg-3  g-5 pb-5  " > 
                  <div className='col'>
                    <div className='item position-relative rounded-3 'data-bs-toggle="modal" data-bs-target="#exampleModal" >
                      <img src={cabin} className='w-100 rounded-3'></img>
                      <div className='layer rounded-3  d-flex justify-content-center align-items-center'>
                       <i className="fas fa-plus fa-4x text-white fw-bold"></i> 
                      </div>
                    </div>

                  </div>
                  <div className='col'>
                    <div className='item position-relative rounded-3 'data-bs-toggle="modal" data-bs-target="#exampleModal2">
                      <img src={circus} className='w-100 rounded-3'></img>
                      <div className='layer rounded-3  d-flex justify-content-center align-items-center'>
                       <i className="fas fa-plus fa-4x text-white fw-bold"></i> 
                      </div>
                    </div>

                  </div>
                  <div className='col'>
                    <div className='item position-relative rounded-3 'data-bs-toggle="modal" data-bs-target="#exampleModal3">
                      <img src={game} className='w-100 rounded-3'></img>
                      <div className='layer rounded-3  d-flex justify-content-center align-items-center'>
                       <i className="fas fa-plus fa-4x text-white fw-bold"></i> 
                      </div>
                    </div>

                  </div>
                  <div className='col'>
                    <div className='item position-relative rounded-3 'data-bs-toggle="modal" data-bs-target="#exampleModal4">
                      <img src={safe} className='w-100 rounded-3'></img>
                      <div className='layer rounded-3  d-flex justify-content-center align-items-center'>
                       <i className="fas fa-plus fa-4x text-white fw-bold"></i> 
                      </div>
                    </div>

                  </div>
                  <div className='col'>
                    <div className='item position-relative rounded-3 'data-bs-toggle="modal" data-bs-target="#exampleModal5">
                      <img src={subm} className='w-100 rounded-3'></img>
                      <div className='layer rounded-3  d-flex justify-content-center align-items-center'>
                       <i className="fas fa-plus fa-4x text-white fw-bold"></i> 
                      </div>
                    </div>

                  </div>
                  <div className='col'>
                    <div className='item position-relative rounded-3 ' data-bs-toggle="modal" data-bs-target="#exampleModal6">
                      <img src={cak} className='w-100 rounded-3'></img>
                      <div className='layer rounded-3  d-flex justify-content-center align-items-center'>
                       <i className="fas fa-plus fa-4x text-white fw-bold"></i> 
                      </div>
                    </div>

                  </div>
              </div>
            </div>
          
            <div className='container pt-5 ' >
             <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl" >
    <div className="modal-content">
      <i className="fa-sharp fa-solid fa-xmark fa-1x"  type="button" data-bs-dismiss="modal" aria-label="Close"></i>
      <div className="modal-body text-center">
          <div className='container'>
            <div className='row justify-content-center '>
                <div className='col-lg-8'>
                <h1 className="modal-title fs-5  text-secondary text-uppercase mb-0 " id="exampleModalLabel">Log Cabin</h1>
                <div className="heeder-icon ">
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                    <i className="fas fa-star  fs-1 "style={{color:'#2c3e50'}} ></i>  
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                </div>
                < img src={cabin} className="w-100" id="myimg"/>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button style={{background:'#1abc9c',color:'#fff'}} type="button" className="btn " data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>

          </div>
       
      </div>
    </div>
  </div>
            </div>
            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
  <div className="modal-dialog modal-xl" >
    <div className="modal-content">
      <i className="fa-sharp fa-solid fa-xmark fa-1x"  type="button" data-bs-dismiss="modal" aria-label="Close"></i>
      <div className="modal-body text-center">
          <div className='container'>
            <div className='row justify-content-center '>
                <div className='col-lg-8'>
                <h1 className="modal-title fs-5  text-secondary text-uppercase mb-0 " id="exampleModal2Label">Log Cabin</h1>
                <div className="heeder-icon ">
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                    <i className="fas fa-star  fs-1 "style={{color:'#2c3e50'}} ></i>  
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                </div>
                < img src={circus} className="w-100" id="myimg"/>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button style={{background:'#1abc9c',color:'#fff'}} type="button" className="btn " data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>

          </div>
       
      </div>
    </div>
  </div>
            </div>
            <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModal3Label" aria-hidden="true">
  <div className="modal-dialog modal-xl" >
    <div className="modal-content">
      <i className="fa-sharp fa-solid fa-xmark fa-1x"  type="button" data-bs-dismiss="modal" aria-label="Close"></i>
      <div className="modal-body text-center">
          <div className='container'>
            <div className='row justify-content-center '>
                <div className='col-lg-8'>
                <h1 className="modal-title fs-5  text-secondary text-uppercase mb-0 " id="exampleModal3Label">Log Cabin</h1>
                <div className="heeder-icon ">
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                    <i className="fas fa-star  fs-1 "style={{color:'#2c3e50'}} ></i>  
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                </div>
                < img src={game} className="w-100" id="myimg"/>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button style={{background:'#1abc9c',color:'#fff'}} type="button" className="btn " data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>

          </div>
       
      </div>
    </div>
  </div>
            </div>
            <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModal4Label" aria-hidden="true">
  <div className="modal-dialog modal-xl" >
    <div className="modal-content">
      <i className="fa-sharp fa-solid fa-xmark fa-1x"  type="button" data-bs-dismiss="modal" aria-label="Close"></i>
      <div className="modal-body text-center">
          <div className='container'>
            <div className='row justify-content-center '>
                <div className='col-lg-8'>
                <h1 className="modal-title fs-5  text-secondary text-uppercase mb-0 " id="exampleModal4Label">Log Cabin</h1>
                <div className="heeder-icon ">
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                    <i className="fas fa-star  fs-1 "style={{color:'#2c3e50'}} ></i>  
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                </div>
                < img src={safe} className="w-100" id="myimg"/>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button style={{background:'#1abc9c',color:'#fff'}} type="button" className="btn " data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>

          </div>
       
      </div>
    </div>
  </div>
            </div>
            <div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModal5Label" aria-hidden="true">
  <div className="modal-dialog modal-xl" >
    <div className="modal-content">
      <i className="fa-sharp fa-solid fa-xmark fa-1x"  type="button" data-bs-dismiss="modal" aria-label="Close"></i>
      <div className="modal-body text-center">
          <div className='container'>
            <div className='row justify-content-center '>
                <div className='col-lg-8'>
                <h1 className="modal-title fs-5  text-secondary text-uppercase mb-0 " id="exampleModal5Label">Log Cabin</h1>
                <div className="heeder-icon ">
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                    <i className="fas fa-star  fs-1 "style={{color:'#2c3e50'}} ></i>  
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                </div>
                < img src={subm} className="w-100" id="myimg"/>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button style={{background:'#1abc9c',color:'#fff'}} type="button" className="btn " data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>

          </div>
       
      </div>
    </div>
  </div>
            </div>
            <div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModal6Label" aria-hidden="true">
            <div className="modal-dialog modal-xl" >
            <div className="modal-content">
            <i className="fa-sharp fa-solid fa-xmark fa-1x"  type="button" data-bs-dismiss="modal" aria-label="Close"></i>
            <div className="modal-body text-center">
            <div className='container'>
            <div className='row justify-content-center '>
                <div className='col-lg-8'>
                <h1 className="modal-title fs-5  text-secondary text-uppercase mb-0 " id="exampleModal6Label">Log Cabin</h1>
                <div className="heeder-icon ">
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                    <i className="fas fa-star  fs-1 "style={{color:'#2c3e50'}} ></i>  
                    <div className="line "  style={{backgroundColor:'#2c3e50'}}></div>
                </div>
                < img src={cak} className="w-100" id="myimg"/>
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button style={{background:'#1abc9c',color:'#fff'}} type="button" className="btn " data-bs-dismiss="modal">Close Window</button>
                </div>
            </div>

          </div>
       
      </div>
    </div>
  </div>
            </div>
            </div>
           
        
    </section>


 

        
  )

}