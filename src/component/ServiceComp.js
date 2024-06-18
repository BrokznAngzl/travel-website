import ServiceCardComp from "./ServiceCardComp";

import CentralData from "../data/CentralData";

const ServiceComp = ({servicesRef}) => {
    const aosClasses = ['fade-up-right', 'fade-up', 'fade-up-left'];

    return (
        <div>
            <section className="py-10" id="services" ref={servicesRef}>
                <div className="container mx-auto px-4">
                    {/*<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>*/}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {CentralData.map((page, index) => {
                            const classIndex = index % aosClasses.length;
                            return (
                                <ServiceCardComp key={index}
                                                 aosType={aosClasses[classIndex]} aosDuration="1500" hrefTo={"journey"}
                                                 imgScr={page.previewImg}
                                                 title={page.title} description={page.prevDescription}
                                                 pageData={page}
                                />

                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceComp

