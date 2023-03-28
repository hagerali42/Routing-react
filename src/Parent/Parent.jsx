import { Component}from 'react'
import { Link, Outlet } from 'react-router-dom'
import Chalid from '../Chalid/Chalid'
export default class Parent extends Component{

    state={
        products:[
            {id:1,name:"nokia",price:4000,isSale:false,count:66},
            {id:1,name:"nokia",price:4000,isSale:false,count:66},
            {id:1,name:"nokia",price:4000,isSale:false,count:66},
            {id:1,name:"nokia",price:4000,isSale:false,count:66},
            {id:1,name:"nokia",price:4000,isSale:false,count:66},
            {id:1,name:"nokia",price:4000,isSale:false,count:66},
            {id:1,name:"nokia",price:4000,isSale:false,count:66},
            {id:1,name:"nokia",price:4000,isSale:false,count:66},
            {id:1,name:"nokia",price:4000,isSale:false,count:66},
        ]
    }
  render(){

    return(
        <div>
            <h1>parent</h1>
            <Link to={"Home"}>Home
            </Link>
            <Link to={"About"}>About
            </Link>
            <Outlet></Outlet>
        </div>
    )
    
  }

}