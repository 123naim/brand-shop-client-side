
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../NavBar-Banner/Banner";
import { useEffect, useState } from "react";

const Home = () => {
    const brandData = useLoaderData();
    const [topRatedProducts, setTopRatedProducts] = useState([]);
    
    useEffect(() => {
        fetch('/topRatedProduct.json')
        .then(res => res.json())
        .then(data => setTopRatedProducts(data))
    }, [])

    
    
    return (
        <div>
            <div className="-mt-[6px]">
                <Banner></Banner>
            </div>
            <div className="my-12">
                <h2 className="text-center my-8 text-4xl font-bold text-gray-700">Our Brands</h2>
                <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center ">
                    {
                        brandData.map(data => <div key={data._id}>
                            <div>
                                <div>
                                    <Link to={`/brandProduct/${data._id}`}>
                                        <div>
                                            <img className="w-[160px] h-[160px] rounded" src={data.imgage} alt="" />
                                            <h2 className="text-3xl font-semibold text-center mt-3 text-gray-600">{data.brand}</h2>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="mt-16">
                <h2 className="text-4xl text-center font-semibold mb-9 text-gray-700">TOP RATED PRODUCTS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {
                        topRatedProducts.map((data, idx) => <div key={idx}>
                            <div className="flex gap-8 py-3 bg-white items-center rounded-xl">
                                <div className="w-40 ml-3">
                                    <img className="w-40 h-24 md:h-36 rounded-xl" src={data.image} alt="" />
                                </div>
                                <div className="mr-8">
                                    <h2 className="text-gray-600 font-semibold mb-3">{data.feature}</h2>
                                    <h1 className="text-[17px]">{data.name}</h1>
                                    <p className="text-xl font-semibold mt-2 text-gray-700">${data.price}.00</p>
                                </div>
                            </div>
                        </div>)
                   }
                </div>
            </div>
        </div>
    );
};

export default Home;