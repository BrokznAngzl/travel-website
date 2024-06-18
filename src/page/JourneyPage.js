import React, {useContext, useEffect} from 'react';
import {PageDataContext} from '../context/PageDataContext';
import NavBarComp from "../component/NavBarComp";
import HeroComp from "../component/HeroComp";
import TopicComp from "../component/TopicComp";
import TravelListComp from "../component/TravelListComp";
import AboutUsComp from "../component/AboutUsComp";
import FooterComp from "../component/FooterComp";

const JourneyPage = () => {
    const {pageData} = useContext(PageDataContext);
    const goToTop = () => {
        window.scrollTo(0, 100);
    }

    useEffect(() => {
        goToTop()
    }, []);


    return (
        <div>
            <NavBarComp/>
            <HeroComp/>
            <TopicComp title={pageData.title}
                       description={pageData.topicDescription}/>

            {pageData.data.map((item, index) => {
                console.log('test', item)
                return <TravelListComp key={index} props={item}/>;
            })}

            <AboutUsComp/>
            <FooterComp/>
        </div>
    );
};

export default JourneyPage;
