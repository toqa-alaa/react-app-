import PageNav from "../compoments/PageNav";
import PageFooter from "../compoments/PageFooter";
import Text from "../compoments/Text";

import MainImg from "../compoments/MainImg";
import'./HomePage.css'
export default function HomePage() {
    return (
        <>
        <div className="background">
        <div className="homepage">
            <PageNav/>
           
                  <Text/>
           <MainImg/>
 
        
            
        </div>   
         <PageFooter/>
         </div>
         </>
    )
}


