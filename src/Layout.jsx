import { Component}from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Contact from'./contact/Contact'
import Portifol from './portif/Portifol'
import About from './about/Aboute'
import Navbar from './Navbar/Navbar'
import BasicExample from './Navbar/Navbar'
// import React,{useEffect,useState} from 'react'
export default function Layout() {
return(
<div className='d-flex flex-column '>
 <div >
 <BasicExample />
</div>
<div style={{height:'9vh',width:'100%' ,backgroundColor:'transparent'}}>

</div>

<div >
<Outlet/>
</div>
<div>
<Footer/>
</div>


</div>
    )
 

}