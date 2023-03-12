import { useGlobalContext } from "../../context/global-context";
import { Container, PageInfo } from "./styled";
import { Button } from "../styles/Button";

const Pagination = ({ text, infoPage, disabled }) => {
    const { page, nextPage, prevPage } = useGlobalContext();

    return (
        <Container>
            <div>
                <Button onClick={prevPage} disabled={page === 1}>Prev</Button>
                <PageInfo>{infoPage}</PageInfo>
                <Button onClick={nextPage} disabled={disabled}>Next</Button>
            </div>
            <p>{text}</p>
        </Container>
    )
};

export default Pagination;