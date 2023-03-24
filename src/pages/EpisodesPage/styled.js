import styled from "styled-components";

export const EpisodesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 40px 80px;

    @media (max-width: 767px) {
        padding: 10px;
    }
`;

export const DataEpisode = styled.div`
    padding: 20px;
    min-width: 350px;

    @media (max-width: 767px) {
        padding: 10px;
        min-width: 250px;
    }
`;

export const EpisodeWrapper = styled.div`
    padding: 40px;
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 40px;
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    
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
    background-color: rgb(217,209,198);
    font-size: 20px;
    font-weight: 600;
    border-radius: 50%;
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    position: absolute;
    top: -45px;
    left: -45px;

    @media (max-width: 767px) {
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

    @media (max-width: 767px) {
        padding: 5px;
    }
`;

export const EpisodeName = styled.h3`
    font-size: 24px;
    letter-spacing: 2px;
    text-align: center;
    background: rgba(66, 68, 90, .8);
    color: rgb(217,209,198);
    box-shadow: 4px 4px 12px 0px rgba(66, 68, 90, 1);
    border-radius: 10px;
    padding: 10px;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;