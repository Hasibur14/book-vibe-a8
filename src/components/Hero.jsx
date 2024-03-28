import { Link } from 'react-router-dom';
import banner from '../assets/images/banner.png';


const Hero = () => {
    return (
        <div className='container mx-auto px-4 lg:px-24'>
            <div className="card card-side bg-base-200 justify-center p-4 lg:p-0">
                <div className="text-center justify-center my-auto lg:space-y-10">
                    <h2 className="text-2xl lg:text-5xl font-bold">Books to freshen up <br /> your bookshelf</h2>
                    <Link to='/listedBooks'>  <button className="btn bg-green-500 text-white mt-10">View The List</button></Link>
                </div>
                <div>
                    <figure><img className='p-16' src={banner} /></figure>
                </div>
            </div>


        </div>
    );
};

export default Hero;