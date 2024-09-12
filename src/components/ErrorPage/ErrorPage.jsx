import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!</h2>
            <Link to="/"> Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;