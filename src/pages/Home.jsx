
import { Link } from "react-router-dom";
import Banner from "../NavBar-Banner/Banner";

const Home = () => {


    return (
        <div>
            <div className="-mt-[6px]">
                <Banner></Banner>
            </div>
            <div className="my-12">
                <h2 className="text-center my-8 text-4xl font-bold">Our Brands</h2>
                <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center ">
                    <Link to="/dell">
                        <div>
                            <img className="w-[160px] h-[160px] rounded" src="https://i.ibb.co/wKWBnYX/Dell.jpg" alt="" />
                            <h2 className="text-3xl font-semibold text-center mt-3">DELL</h2>
                        </div>
                    </Link>
                    <Link to="/iphone">
                        <div>
                            <img className="w-[160px] h-[160px] rounded" src="https://i.ibb.co/7p4z4QQ/apple.jpg" alt="" />
                            <h2 className="text-3xl font-semibold text-center mt-3"> APPLE</h2>
                        </div>
                    </Link>
                    <Link to="/grado">
                        <div>
                            <img className="w-[160px] h-[160px] rounded" src="https://i.ibb.co/wSwg6wF/android-headphones.jpg" alt="" />
                            <h2 className="text-3xl font-semibold text-center mt-3"> GRADO</h2>
                        </div>
                    </Link>
                    <Link to="/samsung">
                        <div>
                            <img className="w-[160px] h-[160px] rounded" src="https://i.ibb.co/BZdw6kF/samsung.jpg" alt="" />
                            <h2 className="text-3xl font-semibold text-center mt-3"> SAMSUNG</h2>
                        </div>
                    </Link>
                    <Link to="/vivo">
                        <div>
                            <img className="w-[160px] h-[160px] rounded" src="https://i.ibb.co/wYSJWvQ/vivo-logo.jpg" alt="" />
                            <h2 className="text-3xl font-semibold text-center mt-3"> VIVO</h2>
                        </div>
                    </Link>
                    <Link to="rolex">
                        <div>
                            <img className="w-[160px] h-[160px] rounded" src="https://i.ibb.co/FB3FdSp/watch.jpg" alt="" />
                            <h2 className="text-3xl font-semibold text-center mt-3"> ROLEX</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="mt-16">
                <h2 className="text-4xl text-center font-semibold">RECOMMENDED FOR YOU</h2>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h2>Name: </h2>
                        <p>Price: </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;