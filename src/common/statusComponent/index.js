import { Title, Paragraph } from "../styles";

const StatusComponent = ({ statusText, titleText }) => {
    return (
        <div>
            <Title>{titleText}</Title>
            <Paragraph>{statusText}</Paragraph>
        </div>
    )
};

export default StatusComponent;