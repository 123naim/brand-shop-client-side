import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiCurrencyDollar } from 'react-icons/hi';
import { toast } from 'react-toastify';


const ProductDetails = () => {
    const [cardDetails, setCardDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://brand-shop-server-side-65129y5rj-nayems-projects-c6ef106d.vercel.app/post/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCardDetails(data)
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleAddToCart = () => {

        const name = cardDetails.name;
        const image = cardDetails.image;
        const brand = cardDetails.brand;
        const type = cardDetails.type;
        const price = cardDetails.price;
        const rating = cardDetails.rating;
        const description = cardDetails.description;
        const model = cardDetails.model;
        const processor = cardDetails.processor;
        const ram = cardDetails.ram;
        const display = cardDetails.display;

        const formInfo = { name, image, brand, type, price, rating, description, model, processor, ram, display };
        console.log(formInfo)

        fetch('https://brand-shop-server-side-65129y5rj-nayems-projects-c6ef106d.vercel.app/cart', {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(formInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Add to Cart Successfully')
                }
            })
    }

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <div>
                <div className="flex flex-col md:flex-row items-center gap-12 bg-white pb-8">
                    <img src={cardDetails.image} alt="" />
                    <div>
                        <h2 className="text-3xl font-semibold mb-3">{cardDetails.name}</h2>
                        <p className="flex gap-1 items-center mb-3"><HiCurrencyDollar className="text-xl text-gray-700"></HiCurrencyDollar> {cardDetails.price}</p>
                        <button onClick={handleAddToCart} className="py-2 px-3 bg-gray-300 rounded-lg">add to curt</button>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-black my-5">Description: </h1>
                    <p className="ml-3 text-gray-600">{cardDetails.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;