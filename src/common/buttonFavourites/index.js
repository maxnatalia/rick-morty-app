import { useGlobalContext } from "../../context/global-context";
import { ButtonLink, FavouriteIcon } from "../styles";
import { CountFavourites, EffectGlow } from "./styled";

const ButtonFavourites = () => {
    const { favourites } = useGlobalContext();

    return (
        <ButtonLink fav="true" to="/favourites" title="Go to My Favourites">
            <FavouriteIcon big="true" />
            <CountFavourites>{favourites !== null && favourites.length}</CountFavourites>
            <EffectGlow />
        </ButtonLink>
    )
};

export default ButtonFavourites;