import { FavouriteIcon } from "../styles/StarIcons";
import { CountFavourites, EffectGlow } from "./styled";
import { useGlobalContext } from "../../context/global-context";
import { ButtonLink } from "../styles/ButtonLink";

const ButtonFavourites = () => {
    const { favourites } = useGlobalContext();

    return (
        <ButtonLink fav="true" to="/favourites" title="Go to My Favourites">
            <FavouriteIcon big="true" />
            <CountFavourites>{favourites.length}</CountFavourites>
            <EffectGlow />
        </ButtonLink>
    )
};

export default ButtonFavourites;