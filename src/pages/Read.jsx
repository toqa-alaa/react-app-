import PageFooter from "../compoments/PageFooter"
import PageNav from "../compoments/PageNav"
import Console from "./Console"

function Read() {
    return (
        <div className="background">
            
            <PageNav/>
            <Console/>

            <PageFooter/>
       
        </div>
    )
}

export default Read
