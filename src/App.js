import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePage from './page/HomePage'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import JourneyPage from "./page/JourneyPage";

import {PageDataProvider} from "./context/PageDataContext";


function App() {
    AOS.init({
        // ตั้งค่าต่างๆ ของ AOS ตรงนี้
        // duration: 1000
    });

    return (
        <PageDataProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/journey" element={<JourneyPage/>}/>
                </Routes>
            </Router>
        </PageDataProvider>

    );

}

export default App;
