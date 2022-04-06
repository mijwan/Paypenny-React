import React from "react";
import "./Header.css";


 const Header = () => {
     return(
         <>
<div className="header-navbar-top">
 <div className="header-email-phone">
 {/* <marquee behavior="alternate"  onMouseOver="this.stop();"
onMouseOut="this.start();" > */}
   <span><i className="fas fa-phone"></i> www.PayPenny.io</span> &nbsp;
   <span><i className="fas fa-envelope-square"></i> Trackon Canada private Limted </span> 
{/* </marquee> */}
 </div>
</div>

  

<header className="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
<div className="container">
<div className="navbar-header">

 <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
   <span className="sr-only">Toggle navigation</span>
   <span className="icon-bar"></span>
   <span className="icon-bar"></span>
   <span className="icon-bar"></span>
 </button>

 <a href="#" className="navbar-brand">PayPenny</a>        
</div>

<nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
 <ul className="nav navbar-nav navbar-right">
   <li>
     <a href="#">Home</a>
   </li>
   
   <li className="dropdown">
     <a className="dropbtn" href="#">Services </a>
   </li>
  

   <li className="dropdown">
     <a className="dropbtn" href="#">Consumers </a>
   </li>

   <li>
     <a href="/blog.php">Blog</a>
   </li>

   <li className="dropdown">
     <a className="dropbtn" href="#">Business</a>
   </li>

   <li>
     <a href="#" ><button className="payment-button">Interac</button></a>
   </li>

 </ul>
</nav>
</div>
</header>
    
          

         </>
     )



}

export default Header;