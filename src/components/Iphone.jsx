import { useLoaderData } from "react-router-dom";

const Iphone = () => {
    const products = useLoaderData();
    const product = products.filter(data => data.brand === "iphone");
    return (
        <div>
            {
                product.map(data => <>
                <img src={data.image} alt="" />
                </>)
            }
        </div>
    );
};

export default Iphone;