
import { Link } from "react-router-dom";
import Banner from "../NavBar-Banner/Banner";
import { useEffect, useState } from "react";
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';




const Home = () => {
    const [brandData, setBrandData] = useState([]);
    const [topRatedProducts, setTopRatedProducts] = useState([]);


    useEffect(() => {
        fetch('https://brand-shop-server-side-65129y5rj-nayems-projects-c6ef106d.vercel.app/data')
            .then(res => res.json())
            .then(data => setBrandData(data))
    }, [])

    console.log(brandData)

    useEffect(() => {
        fetch('https://brand-shop-server-side-65129y5rj-nayems-projects-c6ef106d.vercel.app/topRateProduct')
            .then(res => res.json())
            .then(data => setTopRatedProducts(data))
    }, [])


   


    return (
        <div>
            <div className="-mt-[6px]">
                <Banner></Banner>
            </div>
            <div className="my-12">
                <h2 className="text-center my-8 text-4xl font-bold text-gray-700">Our Brands </h2>
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
            <div className="my-16 text-center">
                <h2 className="text-center text-5xl font-semibold text-gray-700">Contact Us</h2>
                <div className="flex flex-col md:flex-row md:relative items-center justify-around mt-10">
                    <div className="grid grid-cols-2 gap-4 md:absolute top-6 left-40">
                        <div className="bg-white w-48 h-56 flex flex-col justify-center items-center p-4">
                            <MdLocationOn className="text-6xl font-blact text-teal-400" />
                            <h2 className=" font-bold my-3">OUR MAIN OFFICE </h2>
                            <p className="text-gray-700">SoHo 94 Boardway St New Work, NY 1001</p>
                        </div>
                        <div className="bg-white w-48 h-56 flex flex-col justify-center items-center p-4">
                            <BsFillTelephoneFill className="text-5xl font-blact text-teal-400 mt-5 mb-3" />
                            <h2 className=" font-bold my-3">PHONE NUMBER </h2>
                            <p className="text-gray-700">234-9676-5400 <br /> 888-4564-8975 (Toll Free)</p>
                        </div>
                        <div className="bg-white w-48 h-48 flex flex-col justify-center items-center p-4">
                            <FaFax className="text-4xl font-blact text-teal-400 my-4" />
                            <h2 className=" font-bold mb-3">FAX </h2>
                            <p className="text-gray-700">1-465-548-5798</p>
                        </div>
                        <div className="bg-white w-48 h-48 flex flex-col justify-center items-center p-4">
                            <AiTwotoneMail className="text-5xl font-blact text-teal-400 my-3" />
                            <h2 className=" font-bold mb-3">FAX </h2>
                            <p className="text-gray-700"><a href="#">Hero@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="bg-teal-200 w-full md:w-[550px] md:ml-80 h-[480px] flex flex-col items-center justify-center mt-8 md:mt-0">
                        <div className="md:ml-12">
                            <h2 className="text-4xl font-bold text-black">Contact Us</h2>
                            <div>
                                <input className="p-2 pl-4 w-[255px] md:w-96 mt-8" type="text" placeholder="Enter Your Name" />
                                <input className="p-2 pl-4 w-[255px] md:w-96 mt-6" type="text" placeholder="Enter Your Email Address" />
                                <input className="py-10 pl-4 w-[255px] md:w-96 mt-6" type="textarea"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;