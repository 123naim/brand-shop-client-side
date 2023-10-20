import { useLoaderData } from "react-router-dom";


const Samsung = () => {
    const products = useLoaderData();
    const product = products.filter(data => data.brand === "samsang");
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

export default Samsung;