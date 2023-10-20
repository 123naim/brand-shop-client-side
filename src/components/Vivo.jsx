import { useLoaderData } from "react-router-dom";

const Vivo = () => {
    const products = useLoaderData();
    const product = products.filter(data => data.brand === "vivo");
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

export default Vivo;