import { useLoaderData } from "react-router-dom";

const Dell = () => {
    const products = useLoaderData();
    const product = products.filter(data => data.brand === "dell");
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

export default Dell;