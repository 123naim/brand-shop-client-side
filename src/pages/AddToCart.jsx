import { useEffect, useState } from "react";
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';


const AddToCart = () => {
    const [addData, setAddData] = useState([]);
    useEffect(() => {
        fetch('https://brand-shop-server-side-65129y5rj-nayems-projects-c6ef106d.vercel.app/cart')
            .then(res => res.json())
            .then(data => setAddData(data))
    }, [])
    const handleDelete = _id => {
        console.log(_id)
        fetch(`https://brand-shop-server-side-65129y5rj-nayems-projects-c6ef106d.vercel.app/cart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('user Delete Successfully')
                    const remaining = addData.filter(user => user._id !== _id);
                    setAddData(remaining)
                }
            })
    }
    console.log(addData)

    return (
        <div>
            <h2></h2>
            <div>
                {
                    addData.map(data => <p key={data._id}>
                        <div className="flex justify-between items-center border-b-2 py-2">
                            <h1 className="text-3xl text-black font-semibold w-48">{data.name}</h1>
                            <img className="w-24" src={data.image} alt="" />
                            <button className="ml-6 w-20 text-center py-2 px-4 text-3xl text-black bg-white border" onClick={() => handleDelete(data._id)}> <RiDeleteBack2Fill className="ml-2"/> </button>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default AddToCart;