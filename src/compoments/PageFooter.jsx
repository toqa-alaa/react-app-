import { Link } from "react-router-dom";
import './PageFooter.css'
import Toggle from "./Toggle";

function PageFooter() {
  return (
    <div className="footer-wrapper">
    <footer className=" footer">
    <div className="d-flex mb-4 lines-wrapper f-bottom">
 <img src="/Line 5.svg" alt="picture" className="linef" />
 <img src="/Union (1).svg" alt="picture" className="union"/>
<img src="/Line 1.svg " alt="picture" className="linef"/>
      </div>
      <div className="container">
     
       <div className="">
            <ul className="footer-links">
              <li>
                <Link to="/privacy" >
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/RoadMap" >
                  RoadMap
                </Link>
              </li>
              <li>
                <Link to="/Team" >
                  Team
                </Link>
              </li>
            </ul>
          </div>

        <div className="switch">
          <div className="toggle"> <Toggle/></div>
         
          </div>

          <div className="right-section">
                   <a href="https://twitter.com" className="text-white">
                 <img src="/Group 7.svg" /></a> 

                <a href="https://facebook.com" className="text-white">
                 <img src="/Frame 33.svg"/>
                </a>
           
           
                <a href="https://linkedin.com" className="text-white">
<img src="/Frame 34.svg"/>                </a>
               

       
      
 
            
          </div>
   </div>
         
  
        
    </footer>   
      <div className="last text-center">Copyright &copy;  
            <span> Nakarmaz</span> 2024 All right reserved</div>
    </div>
  );
}

export default PageFooter;
