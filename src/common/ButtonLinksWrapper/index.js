import { ButtonLink } from "../styles/ButtonLink";
import { ButtonsWrapper } from "./styled";

const ButtonLinksWrapper = ({ extraLinks }) => {
    return (
        <ButtonsWrapper>
            {extraLinks &&
                <ButtonLink to="/favourites">Favourites</ButtonLink>
            }
            <ButtonLink to="/">Back Home</ButtonLink>
            <ButtonLink to="/characters">Characters</ButtonLink>
            <ButtonLink to="/locations">Locations</ButtonLink>
            <ButtonLink to="/episode">Episodes</ButtonLink>
            <ButtonLink to="/quiz">Quiz</ButtonLink>
        </ButtonsWrapper>
    )
};

export default ButtonLinksWrapper;