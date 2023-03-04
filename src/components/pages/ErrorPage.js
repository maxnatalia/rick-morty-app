import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Error...</h1>
            <p>Sorry, an error has occured...</p>
            <Link to="/">Back Home</Link>
        </div>
    )
};

export default ErrorPage;