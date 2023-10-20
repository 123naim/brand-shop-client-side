import { Outlet } from "react-router-dom";
import Header from "../NavBar-Banner/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <div className="w-[90%] mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;