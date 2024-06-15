import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import TopTen from './page/TopTen'
import HomePage from './page/HomePage'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CafeAtSakonNakhon from "./page/CafeAtSakonNakhon";
import NakhonPhanomTravel from "./page/NakhonPhanomTravel";

function App() {
    AOS.init({
        // ตั้งค่าต่างๆ ของ AOS ตรงนี้
        // duration: 1000
    });


    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/top10" element={<TopTen />} />
                <Route path="/CafeAtSakonNakhon" element={<CafeAtSakonNakhon />} />
                <Route path="/nakhonphanomtravel" element={<NakhonPhanomTravel />} />
                {/*<Route path="/contact" element={<Contact />} />*/}
            </Routes>
        </Router>


    );

}

export default App;
