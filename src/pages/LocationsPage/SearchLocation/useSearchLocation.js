import { useState } from "react";

const useSearchLocation = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [dimension, setDimension] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleType = (type) => {
        setType(type);
    };

    const handleDimension = (dimension) => {
        setDimension(dimension);
    };

    const handleClearLocations = () => {
        setName('');
        setType('');
        setDimension('');
    };

    return { name, type, dimension, handleClearLocations, handleDimension, handleType, handleName }
}

export default useSearchLocation;