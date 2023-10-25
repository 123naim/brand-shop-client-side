import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Rating from "./Rating";

const BrandedProducts = () => {
    const brandUserData = useLoaderData();
    const { id } = useParams();
    const userdata = brandUserData.find(data => data._id === id);
    const [cardDetails, setCardDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "https://brand-shop-server-side-2uhrds1nf-nayems-projects-c6ef106d.vercel.app/post"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const details = data.filter(card => card.brand === userdata.brand.toLowerCase());
                setCardDetails(details)
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [userdata.brand]);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <div>
                <div className="carousel w-full rounded-b-lg -mt-2">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={userdata.slider2} className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={userdata.slider3} className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={userdata.slider1} className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-8 grid grid-cols-4 gap-8">
                {
                    cardDetails.map(data => <>
                        <div>
                            <div className="bg-white w-72 shadow-lg rounded-lg">
                                <div className="flex justify-center">
                                    <div className="relative flex">
                                        <img className="rounded-lg" src="https://i.ibb.co/mhY00k3/product-1.jpg" alt="" />
                                        <i className="absolute top-1 left-0 text-2xl font-semibold text-shadow-lg">{data.brand.toUpperCase()}</i>
                                    </div>
                                </div>
                                <div className="px-6 pb-5">
                                    <h2 className="text-xl font-semibold">{data.name}</h2>
                                    <p className="my-3">{data.description}</p>
                                    <div className="flex justify-between items-center pr-1 my-5">
                                        <p>{data.price}</p>
                                        <p>
                                            <Rating rating={data.rating}></Rating>
                                        </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <Link to={`/details/${data._id}`}>
                                            <button className="py-2 px-4 rounded-lg bg-slate-400 ">DETAILS</button>
                                        </Link>
                                        <Link to={`/update/${data._id}`}>
                                            <button className="py-2 px-4 rounded-lg bg-slate-400 ">UPDATE</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default BrandedProducts;