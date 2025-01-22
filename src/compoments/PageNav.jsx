import { Link } from "react-router-dom";
import Logo from "./Logo";
import './PageNav.css'
import NotchedBtn from "./NotchedBtn";

function PageNav() {
  return (
    <div className="header-wrapper">
      <nav className="navbar">
        <div className="container">
          <ul className="nav-links">
      
            
            <li>
              <Link to="/read">Read</Link>
            </li>
            <li>
              <Link to="/watch">Watch</Link>
            </li>
            <li>
              <Link to="/play">Play</Link>
            </li>
          </ul>
          <div className="logo-container">
            <Logo />
 
          </div>

          <div className="right-section">
            <Link to="/marketplace" className="marketplace-link ">
              Marketplace
            </Link>
            <div >        
            <NotchedBtn text="Connect Wallet" 
            bgColor="rgba(255, 211, 99, 1)" fontSize="16px" color="rgba(30, 30, 30, 1)" />

      
           </div>
          </div>
        </div>
      </nav>
      
      <div className="d-flex lines-wrapper-top ">
 <img src="/Line 5.svg" alt="picture" className="line" />
 <img src="/uuuuu.svg" alt="picture" className="union"/>
<img src="/Line 1.svg " alt="picture" className="line"/>
 

 </div>


    {/*            <div className="flick"></div>

      <div className="bottom-logo text-center align-items-center">
      <img src="/Union (1).png" alt="picture"/>
        <img src="\Group 4.png"  /></div>

*/ }

    </div>

  );
}

export default PageNav;
