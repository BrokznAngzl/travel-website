import {useContext} from "react";
import {useNavigate} from 'react-router-dom';
import {PageDataContext} from "../context/PageDataContext";

const ServiceCardComp = (props) => {
    const navigate = useNavigate();
    const {setPageData} = useContext(PageDataContext);

    const handleRedirect = () => {
        setPageData(props.pageData);
        navigate(`/${props.hrefTo}`);
    };

    return (
        <div onClick={handleRedirect} className="bg-white rounded-lg shadow-md overflow-hidden"
             data-aos={props.aosType} data-aos-duration={props.aosDuration}>
            <img src={props.imgScr} alt="wheat flour grinding" className="w-full h-48 object-cover"/>
            <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{props.title}</h3>
                <p className="text-gray-700 text-sm">{props.description}</p>
            </div>
        </div>
    )
}

export default ServiceCardComp