import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id="error-page">
            <div className="flex h-screen w-full items-center justify-center">
                <div className="text-center">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p className="flex justify-center items-center mt-5 gap-5">
                        <i>{error.statusText || error.message}</i>
                        <Link to='/' className="btn btn-success">Go Back</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;