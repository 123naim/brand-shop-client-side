import { useEffect, useState } from "react";

const AddToCart = () => {
    const [addData, setAddData] = useState([]);
    useEffect(() => {
        fetch('https://brand-shop-server-side-2uhrds1nf-nayems-projects-c6ef106d.vercel.app/cart')
        .then(res => res.json())
        .then(data => setAddData(data))
    }, [])
    const handleDelete = _id => {
        console.log(_id)
        fetch(`https://brand-shop-server-side-2uhrds1nf-nayems-projects-c6ef106d.vercel.app/cart/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remaining = addData.filter(user => user._id !== _id);
                setAddData(remaining)
            }
        })
    }
    console.log(addData)

    return (
        <div>
            <h2>this is add to cart page here</h2>
            <div>
                {
                    addData.map(data => <li key={data._id}>{data?.model} <button className="ml-6" onClick={() => handleDelete(data._id)}>Delete</button></li>)
                }
            </div>
        </div>
    );
};

export default AddToCart;