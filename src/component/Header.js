import React from 'react'
import { FaShoppingCart} from  "@react-icons/all-files/fa/FaShoppingCart";
import {BsFillPersonPlusFill}from "react-icons/bs";
import { FcCustomerSupport ,FcHome, FcCloseUpMode} from "react-icons/fc";
import { SiArchicad, SiBeats,SiFigshare } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";
import { IoLanguageOutline} from "react-icons/io5"
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"
import { motion } from "framer-motion";


import { NavLink, Link} from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {
 
  const {cart} =useSelector(state=>state)
  const showNum=()=>{
    if(cart.length > 0){
      return cart.length
    }
  }
  return (
    <div className='shadow  rounded '>

      <nav className=" navbar navbar-dark bg-dark">
      <div className="fw-light topHeader d-flex  justify-content-center align-items-center">< IoLanguageOutline  style={{fontSize:'20',color:'white', marginRight:'10px'}}/> 
    
      <Link className="me-1"><img src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/256/Flag_of_Palestine.png"  width='20'  alt="" /></Link>

      <Link className="me-1"><img src="https://aux2.iconspalace.com/uploads/424097756.png"  width='20'  alt="" /></Link>

      <Link className="me-1 "><img src="https://icon-library.com/images/united-kingdom-flag-icon/united-kingdom-flag-icon-3.jpg"  width='20'  alt="" /></Link>

      <NavLink activeClassName="active"  to="/shipping" className='nav-link text-warning'><FaShippingFast/></NavLink>
      

     </div>
     
     <div className="fw-light topHeader d-flex  justify-content-center align-items-center ">
       <a href="https://www.facebook.com/Ayoob222/" className="nav-link  fs-4 text-warning">
      <FaFacebook />
       </a>

     <Link  className="">
     <a href="https://www.twitter.com" className="nav-link  fs-4 text-warning">
     <FaTwitter/></a>
 
     </Link >
     <Link  className="">
     <a href="https://www.instagram.com" className="nav-link  fs-4 text-warning">    <FaInstagram/>
     </a>

     </Link >
     </div>

</nav>
      <nav className='headerNavBar navbar navbar-expand-lg navbar-light '>
        <div className="container-fluid">
        <h1 className=''><SiArchicad/><span className='fs-1'>y</span><SiFigshare/><SiFigshare/><SiBeats/> <motion.span
        animate={{
          scale: [1, 1.3, 1.3, 1, 1],
          borderRadius: ["50%", "50%", "50%", "50%", "50%"]
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.1, 0.5, 0.5, 0.5],
          loop: Infinity,
          repeatDelay:1
        }}
        className='text-warning fs-4'
      style={{display:'flex',background:'rgba(255, 255, 255, 0.11)', alignItems:'center', justifyContent:'center'}}>ONLINE SHOP</motion.span> 
       </h1>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
            
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
        <NavLink activeClassName="active"  to="/" className='margin nav-link active border-start border-danger p-3  '>Home<FcHome style={{fontSize:'30' , marginLeft:'10px'}}/></NavLink>
        </li>
        <li className="nav-item" >
        <NavLink activeClassName="active"  to="/product" className='nav-link margin   border-start border-danger p-3'>Product<FcCloseUpMode style={{fontSize:'30' , marginLeft:'10px'}}/></NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName="active"  to="/contactUs" className='nav-link margin border-start border-danger p-3 '>Contact Us<FcCustomerSupport style={{fontSize:'30' , marginLeft:'10px'}}/></NavLink>
        </li>
      </ul>

     <div className='d-flex '>
        <h5  className="position-relative d-flex align-items-center fw-light fs-5 border border-warning bg-warning rounded-pill"><span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2 ">{showNum()}</span><Link className='text-dark nav-link' style={{fontSize:'10'}} to='/cart'>CART <FaShoppingCart  style={{fontSize:'20'}}/></Link> </h5>

        <h4 className="d-flex align-items-center fw-light fs-5 border border-warning ms-3 bg-warning rounded-pill"><Link className='text-dark nav-link' style={{fontSize:'10'}} to='/contactUs'>LOGIN <BsFillPersonPlusFill  style={{fontSize:'20'}}/></Link>  </h4>
        </div>
     
     
  
     
    
          </div>
        </div>
      </nav>
    </div>
  )
}
