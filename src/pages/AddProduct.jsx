
const AddProduct = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const formInfo = { name, image, brand, type, price, rating, description }
        console.log(formInfo)


        fetch('https://brand-shop-server-side-cnpkiy6o9-nayems-projects-c6ef106d.vercel.app/post', {
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
                    form.reset();
                }
            })
    }

    return (
        <div className="bg-base-200 rounded-lg w-5/6 p-8 mt-4 mx-auto">
            <h2 className="text-3xl font-semibold text-center pb-7">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label -mt-3">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="name" required />
                    </div>
                    <div className="form-control">
                        <label className="label -mt-3">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input type="url" placeholder="Your Product URL" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="image" required />
                    </div>
                    <div className="form-control">
                        <label className="label -mt-3">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" placeholder="Brand Name" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="brand" required />
                    </div>
                    <div className="form-control">
                        <label className="label -mt-3">
                            <span className="label-text">Product Type Name</span>
                        </label>
                        <input type="text" placeholder="Product Type Name" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="type" required />
                    </div>
                    <div className="form-control">
                        <label className="label -mt-3">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input type="number" placeholder="Product Price" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="price" required />
                    </div>
                    <div className="form-control">
                        <label className="label -mt-3">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="textarea" placeholder="Product Description" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="description" required />
                    </div>
                    <div className="form-control w-[460px] place-content-center">
                        <label className="label -mt-3">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder="Product Rating" className=" py-2 px-3 border border-gray-300 focus:border-gray-500 focus:border-2 focus:outline-none rounded-lg" name="rating" required />
                    </div>
                </div>
                <div>
                    <button className="w-full mt-8 py-2 text-center bg-rose-300 rounded-lg"><input type="submit" value="SUBMIT" /></button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;