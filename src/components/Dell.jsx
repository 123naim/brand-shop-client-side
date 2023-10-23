import { useLoaderData } from "react-router-dom";

const Dell = () => {
    const products = useLoaderData();
    const product = products.filter(data => data.brand === "dell");
    return (
        <div>
            {
                product.map(data => <>
                    <h2>{data.name}</h2>
                </>)
            }
        </div>
    );
};

export default Dell;