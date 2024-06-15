import NavBarComp from "../component/NavBarComp";
import HeroComp from "../component/HeroComp";
import TopicComp from "../component/TopicComp";
import CafeData from "../data/CafeAtSkonNakhon"
import TravelListComp from "../component/TravelListComp";
import AboutUsComp from "../component/AboutUsComp";
import FooterComp from "../component/FooterComp";

const CafeAtSakonNakhon = (prop) => {
    return (
        <div>
            <NavBarComp/>
            <HeroComp/>

            <TopicComp title="cafe'"
                       description="สวัสดีทุกคนครับ ในช่วงอากาศดีๆ(มั้ง) แบบนี้ถ้าหากอยากพักผ่อนหย่อนใจหลายคนคงมีคำว่าท่องเที่ยวหลุดเข้ามาในหัวกันบ้างซึ่งวันนี้ ไอ้หนุ่มเสื้อเขียวจึงมี 10 สถานที่ท่องเที่ยวในจังหวัด<b> สกลนคร </b>มาแนะนำกัน
                            หากทุกคนพร้อมแล้วล่ะก็ มาเริ่มกันได้เลย !"/>

            {CafeData.map((item, index) => {
                return <TravelListComp key={index} props={item}/>;
            })}

            <AboutUsComp/>
            <FooterComp/>
        </div>
    )
}

export default CafeAtSakonNakhon