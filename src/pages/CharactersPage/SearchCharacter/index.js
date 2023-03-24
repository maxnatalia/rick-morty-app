import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from '../../../context/global-context';
import { filterData } from "./filterData";
import { Button, Input } from "../../../common/styles";
import { FormWrapper, SelectContainer, LabelSelect, LabelName, Select } from './styled';

const SearchCharacter = () => {
    const { setPage, filters, handleFilterChange, handleClear } = useGlobalContext();
    const location = useLocation();
    const inputRef = useRef();

    useEffect(() => {
        const setPageValue = () => {
            setPage(1);
        };
        setPageValue();
    }, [filters, location, setPage]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <FormWrapper>
            <label htmlFor="name-input">
                <Input ref={inputRef} id="name-input" type="text" name="name" placeholder="Search name..." value={filters.name} onChange={handleFilterChange} />
            </label>
            <SelectContainer>
                {filterData.map(({ name, options }) => (
                    <LabelSelect key={name} htmlFor={`${name}-select`}>
                        <LabelName>{name}: </LabelName>
                        <Select
                            name={name}
                            id={`${name}-select`}
                            value={filters[name]}
                            onChange={handleFilterChange}
                        >
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Select>
                    </LabelSelect>
                ))}
            </SelectContainer>
            <Button onClick={handleClear}>Clear</Button>
        </FormWrapper>
    )
};

export default SearchCharacter;