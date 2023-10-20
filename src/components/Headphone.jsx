import { useLoaderData } from "react-router-dom";


const Headphone = () => {
    const products = useLoaderData();
    const product = products.filter(data => data.brand === "grado");
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

export default Headphone;