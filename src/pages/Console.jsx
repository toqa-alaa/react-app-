import Circles from "../compoments/Circles";
import NotchedBtn from "../compoments/NotchedBtn";
import Options from "../compoments/Options";
import Square from "../compoments/Square";
import Toggle from "../compoments/Toggle";

function Console() {
    return (
        <div className="holder-all">
            <div className="rectangles">
    <div className="rectangls-top">
            <img src="Rectangle 42123.png" alt="pic" className="l-top"  />
            <img src="Rectangle 42125.png" alt="pic"  className="r-top"/>
            </div>
            <div className="rectangles-bottom"> 
             <img src="Rectangle 42124.png" alt="pic"  className="r-bottom"/>
            <img src="Rectangle 42126.png" alt="pic"  className="l-bottom"/>     
            </div>
          
            </div>
       <div className="top">

        <div className="line-market">MARKET PLACE</div>
<div className="shape-holder">
        <div className="custom-shape">
    <div className="arrows left">
        <i className="fa-solid fa-chevron-left">
            </i><i className="fa-solid fa-chevron-left">
                </i><i className="fa-solid fa-chevron-left"></i> 
                </div>
    <div className="content">
      <img src="/NUZ_logo_3Dcoin_pose01.svg" alt="icon" className="icon"/>
      <span>14.3K $NUZ</span>
    </div>
    <div className="arrows right">  <i className="fa-solid fa-chevron-right">
            </i><i className="fa-solid fa-chevron-right">
                </i><i className="fa-solid fa-chevron-right"></i> </div>
  </div></div>



        <div className="c-notched">  
              <NotchedBtn text="Connect Wallet" 
            bgColor="rgba(255, 211, 99, 1)" fontSize="16px" color="rgba(30, 30, 30, 1)" />
            </div>    
        </div>
        <div className="game-btn">
        <Circles/>
        <Square/>
        </div>
        <div className="bottom">
        <div className="shape-holder">
        <div className="custom-shape">
    <div className="arrows left">
        <i className="fa-solid fa-chevron-left">
            </i><i className="fa-solid fa-chevron-left">
                </i><i className="fa-solid fa-chevron-left"></i> 
                </div>
    <div className="content">
   <Toggle/>
    </div>
    <div className="arrows right">  <i className="fa-solid fa-chevron-right">
            </i><i className="fa-solid fa-chevron-right">
                </i><i className="fa-solid fa-chevron-right"></i> </div>
  </div></div>
        </div>
        <div> 
            <Options/></div>
  
        </div>
    )
}

export default Console;

 