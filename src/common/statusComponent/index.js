import { Paragraph } from "../../common/styles/Paragraph";
import { Title } from "../styles/Title";

const StatusComponent = ({ statusText, titleText }) => {
    return (
        <div>
            <Title>{titleText}</Title>
            <Paragraph>{statusText}</Paragraph>
        </div>
    )
};

export default StatusComponent;