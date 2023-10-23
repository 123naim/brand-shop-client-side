
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../NavBar-Banner/Banner";

const Home = () => {
    const brandData = useLoaderData();

    return (
        <div>
            <div className="-mt-[6px]">
                <Banner></Banner>
            </div>
            <div className="my-12">
                <h2 className="text-center my-8 text-4xl font-bold">Our Brands</h2>
                <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center ">
                    {
                        brandData.map(data => <div key={data._id}>
                            <div>
                                <div>
                                    <Link to={`/brandProduct/${data._id}`}>
                                        <div>
                                            <img className="w-[160px] h-[160px] rounded" src={data.imgage} alt="" />
                                            <h2 className="text-3xl font-semibold text-center mt-3">{data.brand}</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="mt-16">
                <h2 className="text-4xl text-center font-semibold">RECOMMENDED FOR YOU</h2>
                <div>
                    <div className="bg-white w-72 shadow-lg rounded-lg">
                        <div className="flex justify-center">
                            <div className="relative flex">
                                <img className="rounded-lg" src="https://i.ibb.co/mhY00k3/product-1.jpg" alt="" />
                                <i className="absolute top-1 left-0 text-2xl font-semibold text-shadow-lg">Dell</i>
                            </div>
                        </div>
                        <div className="px-6 pb-5">
                            <h2 className="text-xl font-semibold">Dell Inspiron 15 3501</h2>
                            <p className="my-3">The Dell Inspiron 15 3501 Core i3 10th Gen 4GB RAM 15.6 Inch</p>
                            <div className="flex justify-between pr-1 my-5">
                                <p>42,500</p>
                                <p>rating</p>
                            </div>
                            <div className="flex justify-between">
                                <button className="py-2 px-4 rounded-lg bg-slate-400 ">Detials</button>
                                <button className="py-2 px-4 rounded-lg bg-slate-400 ">Detials</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;