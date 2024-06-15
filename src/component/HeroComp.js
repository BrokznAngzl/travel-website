const HeroComp = () => {
    return(
        <div>
            <div className="relative w-full h-[320px]" id="home">
                <div className="absolute inset-0 opacity-70">
                    <img
                        // src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
                        src="https://roijang.com/wp-content/uploads/2023/08/shutterstock_1194675172.jpg"
                        alt="Background Image" className="object-cover object-center w-full h-full"/>

                </div>
                <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
                            Solo Adventure</h1>
                        <p className="font-regular text-xl mb-8 mt-4">
                            มาค้นหา และ ตามไปที่เทียวด้วยกันได้เลย !
                        </p>
                        <a href="#contactUs"
                           className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">Contact
                            Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComp