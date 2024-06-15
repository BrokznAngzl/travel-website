import ServiceCardComp from "./ServiceCardComp";

const ServiceComp = () => {
    return (
        <div>
            <section className="py-10" id="services">
                <div className="container mx-auto px-4">
                    {/*<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>*/}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <ServiceCardComp aosType="fade-up-right" aosDuration="1500" hrefTo="top10"
                        imgScr="https://cms.dmpcdn.com/travel/2022/07/04/df5c3300-fb5b-11ec-acd3-418367d5b2bf_webp_original.jpg"
                        title="10 สถานที่น่าเที่ยวในจังหวัดสกลนคร" description="ไอ้หนุ่มเสื้อเขียวมี 10 สถานที่ท่องเที่ยวในจังหวัดสกลนครมาแนะนำกัน หากทุกคนพร้อมแล้วล่ะก็มาเริ่มกันได้เลย !"/>

                        <ServiceCardComp aosType="fade-up" aosDuration="1500" hrefTo="CafeAtSakonNakhon"
                        imgScr="https://img.wongnai.com/p/624x0/2021/12/19/5309e2380b1e4575a2f40eaa59dd1a69.jpg"
                        title="รวมคาเฟ่สุดเจ๋งจากสกลนคร" description="ไอ้หนุ่มเสื้อเขียวมีคาเฟ่สุดเจ๋งในจังหวัดสกลนครมาแนะนำกัน หากทุกคนพร้อมแล้วล่ะก็มาเริ่มกันได้เลย !"/>

                        <ServiceCardComp aosType="fade-up-left" aosDuration="1500" hrefTo="top10"
                        imgScr="https://cms.dmpcdn.com/travel/2022/07/04/df5c3300-fb5b-11ec-acd3-418367d5b2bf_webp_original.jpg"
                        title="10 สถานที่น่าเที่ยวในจังหวัดสกลนคร" description="ไอ้หนุ่มเสื้อเขียวมี 10 สถานที่ท่องเที่ยวในจังหวัดสกลนครมาแนะนำกัน หากทุกคนพร้อมแล้วล่ะก็มาเริ่มกันได้เลย !"/>
                        <ServiceCardComp aosType="fade-up-right" aosDuration="1500" hrefTo="top10"
                        imgScr="https://cms.dmpcdn.com/travel/2022/07/04/df5c3300-fb5b-11ec-acd3-418367d5b2bf_webp_original.jpg"
                        title="10 สถานที่น่าเที่ยวในจังหวัดสกลนคร" description="ไอ้หนุ่มเสื้อเขียวมี 10 สถานที่ท่องเที่ยวในจังหวัดสกลนครมาแนะนำกัน หากทุกคนพร้อมแล้วล่ะก็มาเริ่มกันได้เลย !"/>
                        <ServiceCardComp aosType="fade-up" aosDuration="1500" hrefTo="top10"
                        imgScr="https://cms.dmpcdn.com/travel/2022/07/04/df5c3300-fb5b-11ec-acd3-418367d5b2bf_webp_original.jpg"
                        title="10 สถานที่น่าเที่ยวในจังหวัดสกลนคร" description="ไอ้หนุ่มเสื้อเขียวมี 10 สถานที่ท่องเที่ยวในจังหวัดสกลนครมาแนะนำกัน หากทุกคนพร้อมแล้วล่ะก็มาเริ่มกันได้เลย !"/>
                        <ServiceCardComp aosType="fade-up-left" aosDuration="1500" hrefTo="top10"
                        imgScr="https://cms.dmpcdn.com/travel/2022/07/04/df5c3300-fb5b-11ec-acd3-418367d5b2bf_webp_original.jpg"
                        title="10 สถานที่น่าเที่ยวในจังหวัดสกลนคร" description="ไอ้หนุ่มเสื้อเขียวมี 10 สถานที่ท่องเที่ยวในจังหวัดสกลนครมาแนะนำกัน หากทุกคนพร้อมแล้วล่ะก็มาเริ่มกันได้เลย !"/>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceComp


// < div
// className = "bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full" >
//     < div
// className = "text-center text-white font-medium" > Special
// product < /div>
// <img
//     src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww"
//     alt="Coffee"
//     className="w-full h-64 object-cover rounded-t-lg"/>
// <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
//     <h3 className="text-xl font-medium text-gray-800 mb-2">Flavoured Spaghetti</h3>
//     <p className="text-gray-700 text-base"><span className="font-medium underline">Our speciality is</span>
//         Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to
//         tantalize your
//         taste
//         buds. We use only the freshest ingredients Our
//         flavors include: Mango, spinach
//     </p>
// </div>
// </div>