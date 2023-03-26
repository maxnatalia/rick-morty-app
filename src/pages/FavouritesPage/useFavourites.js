import { useEffect, useState } from "react";

const useFavourites = () => {
    const [favourites, setFavourites] = useState(() => JSON.parse(localStorage.getItem('favourites')) || []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    useEffect(() => {
        JSON.parse(localStorage.getItem('favourites'))
    }, []);

    const isFavourite = id => favourites !== null && favourites.some((fav) => fav.id === id);

    const handleAddFavourites = (character) => {
        setFavourites([...favourites, character]);
    };

    const handleRemoveFavourites = (id) => {
        setFavourites(favourites.filter((fav) => fav.id !== id));
    };

    const toggleFavourite = (character) => {
        if (isFavourite(character.id)) {
            handleRemoveFavourites(character.id)
        } else {
            handleAddFavourites(character);
        }
    };

    const handleFavouriteClick = (character) => {
        toggleFavourite(character);
    };

    return { favourites, setFavourites, isFavourite, toggleFavourite, handleAddFavourites, handleRemoveFavourites, handleFavouriteClick }
};

export default useFavourites;