const TravelListComp = (props) => {
    const place = props.props;
    return (
        <section className="py-10 my-20" id="services">
            <div
                className=" flex justify-center w-full px-20">
                <div className=" flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left" data-aos="zoom-in-up" data-aos-duration="2000">

                        <h2 className="text-xs md:text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none">
                            {place.title}
                        </h2>
                        <p className="max-w-md text-balance mx-auto mt-3 mr-10 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            {place.description}
                        </p>
                    </div>
                </div>
                <div className="max-w-xl flex justify-center" data-aos="fade-left" data-aos-duration="2000">
                    <img
                        src={place['src']}
                        alt="AncientBuilding"
                        className="object-cover rounded-3xl drop-shadow-xl "/>
                </div>
            </div>
        </section>
    )
}

export default TravelListComp