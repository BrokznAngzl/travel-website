import NavBarComp from "../component/NavBarComp";
import HeroComp from "../component/HeroComp";
import TopicComp from "../component/TopicComp";
import CafeData from "../data/CafeAtSakonNakhon"
import TravelListComp from "../component/TravelListComp";
import AboutUsComp from "../component/AboutUsComp";
import FooterComp from "../component/FooterComp";

const NakhonPhanomTravel = (prop) => {
    return (
        <div>
            <NavBarComp/>
            <HeroComp/>

            <TopicComp title="Nakhon Phanom Travel'"
                       description="NakhonPhanomTravel Description !"/>

            {CafeData.map((item, index) => {
                return <TravelListComp key={index} props={item}/>;
            })}

            <AboutUsComp/>
            <FooterComp/>
        </div>
    )
}

export default NakhonPhanomTravel