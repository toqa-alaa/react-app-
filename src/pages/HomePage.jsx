import PageNav from "../compoments/PageNav";
import PageFooter from "../compoments/PageFooter";
import Text from "../compoments/Text";
import'./HomePage.css'
import MainImg from "../compoments/MainImg";

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


