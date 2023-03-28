import React from 'react'
import{ NavLink }from 'react-router-dom'

// import { Link, NavLink } from 'react-router-dom'
// export default function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
//             <div className='container'>
//             <Link className="navbar-brand" to="/">Start React</Link>

//             <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
//              type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                      Menu
//                     <i className="fas fa-bars"></i>
//             </button>
               
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

//                         <li className="nav-item">
//                             <NavLink className={({ isActive }) => isActive == true ? 'nav-link test' : 'nav-link'} to="About" >About</NavLink>
//                         </li>

//                         <li className="nav-item">
//                             <NavLink className={({ isActive }) => isActive == true ? 'nav-link test' : 'nav-link'} to="contact" >Contact</NavLink>
//                         </li>

//                         <li className="nav-item">
//                             <NavLink className={({ isActive }) => isActive == true ? 'nav-link test' : 'nav-link'} to="portif" >portif</NavLink>
//                         </li>
                       
            

//                     </ul>

//                 </div>
//             </div>
//        </nav>
//     )
// }
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar style={{backgroundColor:'#2c3e50',color:'#fff'}}  expand="lg" fixed="top" className='text-uppercase p-3 ' >
      <Container>
        <Navbar.Brand href="/"className='text-uppercase fw-bolder text-white' > Start react</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'#2c3e50'}}  className="text-uppercase font-weight-bold  rounded" />  
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mb-2 mb-lg-0 ">  
            <NavLink style={{padding:'0.5rem 1.3rem'}} className={({ isActive }) => isActive == true ? 'nav-link test' : 'nav-link '} to="Home" >Home</NavLink> 
            <NavLink style={{padding:'0.5rem 1.3rem'}} className={({ isActive }) => isActive == true ? 'nav-link test' : 'nav-link'} to="portif" >Portfolio</NavLink>         
            <NavLink style={{padding:'0.5rem 1.3rem'}} className={({ isActive }) => isActive == true ? 'nav-link test' : 'nav-link '} to="About" >About</NavLink>
            <NavLink style={{padding:'0.5rem 1.3rem'}} className={({ isActive }) => isActive == true ? 'nav-link test' : 'nav-link'} to="contact" >Contact</NavLink>
         
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;


