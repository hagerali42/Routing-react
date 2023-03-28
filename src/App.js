import { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './about/Aboute'
import Contact from './contact/Contact'
import Home from './Home/Home'
import Parent from './Parent/Parent'
import Portifol from './portif/Portifol'
import Layout from './Layout'
export default class App extends Component {
  render() {
    let router=createBrowserRouter([
      {
        path:"/",element:<Layout/>,children:[
          {index:true,element:<Home/>},
          {path:"Home",element:<Home/>},
          {path:"About",element:<About/>},
          {path:"contact",element:<Contact/>},
          {path:"portif",element:<Portifol/>},
          {path:"*",element:<About/>},
        ]
      }
    ])
    return(
   

      <RouterProvider router={router}/>
    )
  }

}