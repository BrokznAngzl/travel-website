import ServiceCardComp from "./ServiceCardComp";
import PlaceData from "../data/PlaceData";
import CafeAtSkonNakhon from "../data/CafeAtSkonNakhon";

const ServiceComp = () => {
    return (
        <div>
            <section className="py-10" id="services">
                <div className="container mx-auto px-4">
                    {/*<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>*/}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <ServiceCardComp aosType="fade-up-right" aosDuration="1500" hrefTo={PlaceData.pageID}
                                         imgScr="https://cms.dmpcdn.com/travel/2022/07/04/df5c3300-fb5b-11ec-acd3-418367d5b2bf_webp_original.jpg"
                                         title={PlaceData.title} description={PlaceData.prevDescription}/>

                        <ServiceCardComp aosType="fade-up" aosDuration="1500" hrefTo={CafeAtSkonNakhon.pageID}
                                         imgScr="https://img.wongnai.com/p/624x0/2021/12/19/5309e2380b1e4575a2f40eaa59dd1a69.jpg"
                                         title={CafeAtSkonNakhon.title}
                                         description={CafeAtSkonNakhon.prevDescription}/>

                        <ServiceCardComp aosType="fade-up-left" aosDuration="1500" hrefTo="top10"
                                         imgScr="https://cms.dmpcdn.com/travel/2022/07/04/df5c3300-fb5b-11ec-acd3-418367d5b2bf_webp_original.jpg"
                                         title="10 สถานที่น่าเที่ยวในจังหวัดสกลนคร"
                                         description="ไอ้หนุ่มเสื้อเขียวมี 10 สถานที่ท่องเที่ยวในจังหวัดสกลนครมาแนะนำกัน หากทุกคนพร้อมแล้วล่ะก็มาเริ่มกันได้เลย !"/>
                        <ServiceCardComp aosType="fade-up-right" aosDuration="1500" hrefTo="top10"
                                         imgScr="https://cms.dmpcdn.com/travel/2022/07/04/df5c3300-fb5b-11ec-acd3-418367d5b2bf_webp_original.jpg"
                                         title="10 สถานที่น่าเที่ยวในจังหวัดสกลนคร"
                                         description="ไอ้หนุ่มเสื้อเขียวมี 10 สถานที่ท่องเที่ยวในจังหวัดสกลนครมาแนะนำกัน หากทุกคนพร้อมแล้วล่ะก็มาเริ่มกันได้เลย !"/>
                        <ServiceCardComp aosType="fade-up" aosDuration="1500" hrefTo="top10"
                                         imgScr="https://cms.dmpcdn.com/travel/2022/07/04/df5c3300-fb5b-11ec-acd3-418367d5b2bf_webp_original.jpg"
                                         title="10 สถานที่น่าเที่ยวในจังหวัดสกลนคร"
                                         description="ไอ้หนุ่มเสื้อเขียวมี 10 สถานที่ท่องเที่ยวในจังหวัดสกลนครมาแนะนำกัน หากทุกคนพร้อมแล้วล่ะก็มาเริ่มกันได้เลย !"/>
                        <ServiceCardComp aosType="fade-up-left" aosDuration="1500" hrefTo="top10"
                                         imgScr="https://cms.dmpcdn.com/travel/2022/07/04/df5c3300-fb5b-11ec-acd3-418367d5b2bf_webp_original.jpg"
                                         title="10 สถานที่น่าเที่ยวในจังหวัดสกลนคร"
                                         description="ไอ้หนุ่มเสื้อเขียวมี 10 สถานที่ท่องเที่ยวในจังหวัดสกลนครมาแนะนำกัน หากทุกคนพร้อมแล้วล่ะก็มาเริ่มกันได้เลย !"/>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceComp

