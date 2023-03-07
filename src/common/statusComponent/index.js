import { Wrapper, Title } from "./styled";

const StatusComponent = ({ statusText }) => {
    return (
        <Wrapper>
            <Title>{statusText}</Title>
        </Wrapper>
    )
}

export default StatusComponent;