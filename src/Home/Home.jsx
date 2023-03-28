import React from 'react'
import   ava from '../assets/ava.svg'
// import React,{useEffect,useState} from 'react'
export default function Home() {
return(
<div id='home' className='d-flex justify-content-center align-items-center' >
<content className="text-center">
<div className=''>
<img className=" mb-5 col-5" src={ava} alt=""/>
</div>


<h1 className=" text-uppercase mb-0  text-white " style={{fontSize:'4rem',fontWeight:'900',fontFamily:"inherit",lineHeight:'3.5rem'}}>Start React</h1>
<div className="heeder-icon">
    <div className="line" style={{backgroundColor:'#fff'}} ></div>
     <i className="fas fa-star text-white fs-1"></i>  
     <div className="line" style={{backgroundColor:'#fff'}}></div>
 </div>
 <div>
 <p className="text-white"  style={{fontSize:'2rem',fontWeight:'lighter'}}>Graphic Artist - Web Designer - Illustrator</p> 
 </div>
 

</content>

</div>
    )
 

}