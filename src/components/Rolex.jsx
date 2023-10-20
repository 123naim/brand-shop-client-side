import { useLoaderData } from "react-router-dom";

const Rolex = () => {
    const products = useLoaderData();
    const product = products.filter(data => data.brand === "rolex");
    return (
        <div>
            <div>
                <div className="carousel w-full rounded-b-lg -mt-2">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/VLH7B3g/Rollex-banner-1.jpg" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/qB6HGyT/rolex-banner-2.webp" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/ZGMTVJd/rolex-banner-3.webp" className="w-full h-[550px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-8 grid grid-cols-3 gap-8">
                {
                    product.map(data => <>
                        <div className="border p-3 rounded-lg">
                            <div className="flex flex-col gap-4 items-center">
                                <img className="rounded-lg w-96 h-60" src={data.image} alt="" />
                                <div>
                                    <h2 className="text-3xl font-semibold text-gray-700">Name: <span className="text-gray-500 font-medium">{data.name}</span></h2>
                                    <p className="font-semibold text-2xl text-gray-700">Brand: <span className="text-gray-500 font-medium">{data.brand}</span></p>
                                    <p className="font-semibold text-2xl text-gray-700">Type: <span className="text-gray-500 font-medium">{data.type}</span></p>
                                    <p className="font-semibold text-2xl text-gray-700">Price: <span className="text-gray-500 font-medium">{data.price}</span></p>
                                    <p className="font-semibold text-2xl text-gray-700">Description: <span className="text-gray-500 font-medium">{data.description.slice(0, 15)}....</span></p>
                                    <p className="font-semibold text-2xl text-gray-700">Rating: <span className="text-gray-500 font-medium">{data.rating}</span></p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 mt-4">
                                <button className="rounded-lg py-2 px-3 bg-pink-500 text-white">Detials</button>
                                <button className="rounded-lg py-2 px-3 bg-pink-500 text-white">Update</button>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Rolex;