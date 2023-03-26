import { useContext, createContext } from 'react'
import { usePager } from '../common/Pagination/usePager';
import { useSearchCharacter } from '../pages/CharactersPage/SearchCharacter/useSearchCharacter';
import useFavourites from '../pages/FavouritesPage/useFavourites';
import useSearchEpisode from '../pages/EpisodesPage/SearchEpisode/useSearchEpisode';
import useSearchLocation from '../pages/LocationsPage/SearchLocation/useSearchLocation';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
    const { page, setPage, nextPage, prevPage } = usePager();
    const { filters, setFilters, handleFilterChange, handleClear } = useSearchCharacter();
    const { name, type, dimension, handleClearLocations, handleDimension, handleType, handleName } = useSearchLocation();
    const { nameEpisode, setNameEpisode, handleClearName, handleInputName } = useSearchEpisode();
    const { favourites, setFavourites, handleAddFavourites, handleRemoveFavourites, isFavourite, toggleFavourite, handleFavouriteClick } = useFavourites();

    return (
        <GlobalContext.Provider value={{
            page,
            setPage,
            nextPage,
            prevPage,
            filters,
            setFilters,
            handleFilterChange,
            handleClear,
            name,
            type,
            dimension,
            handleClearLocations,
            handleDimension,
            handleType,
            handleName,
            handleInputName,
            handleClearName,
            nameEpisode,
            setNameEpisode,
            favourites,
            setFavourites,
            handleAddFavourites,
            handleRemoveFavourites,
            isFavourite,
            toggleFavourite,
            handleFavouriteClick
        }}>
            {children}
        </GlobalContext.Provider>
    )
};