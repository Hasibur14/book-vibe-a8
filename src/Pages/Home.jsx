import Books from "../components/Books";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div className="pt-28">
            <Hero></Hero>
           <div className="">
           <Books></Books>
           </div>
        </div>
    );
};

export default Home;