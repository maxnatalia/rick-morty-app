import styled from "styled-components";

export const LocationsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 600px));
    justify-content: center;
    grid-gap: 40px;
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        padding: 20px;
    }
`;

export const LocationWrapper = styled.div`
    display: flex;
    background-color: transparent;
    flex-direction: column;
    gap: 20px;
    padding: 40px 60px;
    position: relative;
    border: 1px solid ${({ theme }) => theme.color.secondaryColor};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 20px;
    }
`;

export const LocationNumber = styled.span`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.primaryColor};
    font-size: 28px;
    font-weight: 600;
    border-radius: ${({ theme }) => theme.borderRadius.big};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    position: absolute;
    top: -15px;
    left: -15px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 40px;
        height: 40px;
        font-size: 22px;
        left: -5px;
    }
`;

export const LocationName = styled.h3`
    font-size: 24px;
    letter-spacing: 2px;
    background: ${({ theme }) => theme.color.darkColor};
    color: ${({ theme }) => theme.color.primaryColor};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 20px;
    }
`;

export const LocationData = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    font-size: 20px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 14px;
    }
`;

export const LocationType = styled.p`
    padding: 10px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background: ${({ theme }) => theme.color.darkColor};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    color: ${({ theme }) => theme.color.primaryColor};
    font-weight: 600;
    letter-spacing: 3.5px;
`;

export const WrapperTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;
