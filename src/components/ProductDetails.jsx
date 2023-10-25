import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const [cardDetails, setCardDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://brand-shop-server-side-2uhrds1nf-nayems-projects-c6ef106d.vercel.app/post/${id}`)
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

        fetch('https://brand-shop-server-side-2uhrds1nf-nayems-projects-c6ef106d.vercel.app/cart', {
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
                    alert('User added successfully');
                }
            })
    }

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <h2>{cardDetails.name}</h2>
            <button onClick={handleAddToCart} className="btn">add to curt</button>
        </div>
    );
};

export default ProductDetails;