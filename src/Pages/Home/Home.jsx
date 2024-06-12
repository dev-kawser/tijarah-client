import Banner from "../../Components/Banner";
import Offer from "../../Components/Offer";
import TopCategory from "../../Components/TopCategory";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Offer></Offer>
            <TopCategory></TopCategory>
        </div>
    );
};

export default Home;