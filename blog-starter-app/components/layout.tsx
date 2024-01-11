import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import NavBarComp from './navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Inquiry from './inquiry'
import NewsLetter from './newsletter'




type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (

    
    <>
     
      <Meta />
   <NavBarComp />
 
      <div className="min-h-screen">
  
    
      <main>{children}</main> 

      
      </div>
      
      <NewsLetter />
    </>
    
  )
}

export default Layout
