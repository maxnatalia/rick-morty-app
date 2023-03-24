import { useGlobalContext } from "../../context/global-context";
import { Button } from "../styles/Button";
import { Container, PageInfo, Wrapper } from "./styled";

const Pagination = ({ text, infoPage, disabled }) => {
    const { page, nextPage, prevPage } = useGlobalContext();

    return (
        <Container>
            <Wrapper>
                <Button onClick={prevPage} disabled={page === 1}>Prev</Button>
                <PageInfo>{infoPage}</PageInfo>
                <Button onClick={nextPage} disabled={disabled}>Next</Button>
            </Wrapper>
            <p>{text}</p>
        </Container>
    )
};

export default Pagination;