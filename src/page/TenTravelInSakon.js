import NavBarComp from "../component/NavBarComp";
import HeroComp from "../component/HeroComp";
import TopicComp from "../component/TopicComp";
import TravelListComp from "../component/TravelListComp";
import AboutUsComp from "../component/AboutUsComp";
import FooterComp from "../component/FooterComp";

import PlaceData from "../data/PlaceData";
import placeData from "../data/PlaceData";

const TenTravelInSakon = () => {
    return (
        <div>
            <NavBarComp/>
            <HeroComp/>
            <TopicComp title={placeData.title}
                       description={PlaceData.topicDescription}/>

            {PlaceData.data.map((item, index) => {
                return <TravelListComp key={index} props={item}/>;
            })}

            <AboutUsComp/>
            <FooterComp/>
        </div>
    )
}

export default TenTravelInSakon