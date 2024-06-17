import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import TenTravelInSakon from './page/TenTravelInSakon'
import HomePage from './page/HomePage'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CafeAtSakonNakhon from "./page/CafeAtSakonNakhon";
import NakhonPhanomTravel from "./page/NakhonPhanomTravel";
import PlaceData from "./data/PlaceData";
import CafeAtSkonNakhon from "./data/CafeAtSkonNakhon";

function App() {
    AOS.init({
        // ตั้งค่าต่างๆ ของ AOS ตรงนี้
        // duration: 1000
    });


    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={PlaceData.pageID} element={<TenTravelInSakon />} />
                <Route path={CafeAtSkonNakhon.pageID} element={<CafeAtSakonNakhon />} />
                <Route path="/nakhonphanomtravel" element={<NakhonPhanomTravel />} />
            </Routes>
        </Router>


    );

}

export default App;
