import NavBarComp from "../component/NavBarComp";
import HeroComp from "../component/HeroComp";
import TopicComp from "../component/TopicComp";
import ServiceComp from "../component/ServiceComp";
import AboutUsComp from "../component/AboutUsComp";
import FooterComp from "../component/FooterComp";

const HomePage = () => {
    return (
        <div>
            <NavBarComp/>
            <HeroComp/>
            <TopicComp title="ยินดีต้อนรับ" description="นี่คือเว็บไซต์สำหรับทุกคนที่ต้องการค้นหาสถานที่ท่องเที่ยวต่างๆไม่ว่าจะเป็นหน้าร้อน หน้าฝน หรรือ หน้าไหนๆ เราก็จัดการหามาให้ทุกท่านได้อ่านกันแล้วตามไปเที่ยววด้วยกัน และแน่นอนภายในเว็บไซต์นี้เราได้รวบรวมข้อมูลไว้ให้กับทุกท่านไว้อย่างมากมายสามารถเลือกดู Topic ต่างๆได้เลยตอนนี้"/>
            <ServiceComp/>
            <AboutUsComp/>
            <FooterComp/>
        </div>
    )
}

export default HomePage