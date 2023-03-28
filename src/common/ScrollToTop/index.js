import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/global-context";

const ScrollToTop = ({ children }) => {
    const { page } = useGlobalContext();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location, page]);

    return <>{children}</>
};

export default ScrollToTop;