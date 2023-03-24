import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    padding: 40px 80px;
    margin-bottom: 40px;
`;

export const SelectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

export const LabelSelect = styled.label`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   width: 150px;
`;

export const LabelName = styled.span`
    text-transform: capitalize;
    background: rgba(66, 68, 90, .5);
    border-radius: 20px;
    padding: 5px 10px;
    letter-spacing: 2px;
    color: white;
`;

export const Select = styled.select`
    width: 100%;
    color: white;
    letter-spacing: 1.7px;
    padding: 10px 15px;
    border-radius: 40px;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    border: 1px solid black;
    background: rgba(66, 68, 90, .5);
    cursor: pointer;
`;