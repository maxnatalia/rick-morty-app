import styled from "styled-components";

export const EpisodesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 40px 80px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 10px;
    }
`;

export const DataEpisode = styled.div`
    padding: 20px;
    min-width: 350px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 10px;
        min-width: 250px;
    }
`;

export const EpisodeWrapper = styled.div`
    padding: 40px;
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.secondaryColor};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    
    @media (max-width: 991px) {
      flex-direction: column;
      padding: 10px;
    }
`;

export const EpisodeNumber = styled.span`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.primaryColor};
    font-size: 20px;
    font-weight: 600;
    border-radius: ${({ theme }) => theme.borderRadius.big};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    position: absolute;
    top: -45px;
    left: -45px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 80px;
        height: 80px;
        font-size: 16px;
        left: -5px;
    }
`;

export const ListCast = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 5px;
    }
`;

export const EpisodeName = styled.h3`
    font-size: 24px;
    letter-spacing: 2px;
    text-align: center;
    background: ${({ theme }) => theme.color.darkColor};
    color: ${({ theme }) => theme.color.primaryColor};
    box-shadow: ${({ theme }) => theme.boxShadow.lightShadow};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 20px;
    }
`;