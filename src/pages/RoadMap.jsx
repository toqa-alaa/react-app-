import Map from "../compoments/Map"
import PageFooter from "../compoments/PageFooter"
import PageNav from "../compoments/PageNav"

function RoadMap() {
    return (
        <div className="background">
            <PageNav/>
             <Map/>
           
            <PageFooter/>
            
        </div>
    )
}

export default RoadMap
