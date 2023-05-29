import React from 'react';
import { useGlobalContext } from '../context/global';
import RightSidebar from './PopularSidebar';
import LeftSidebar from './UpcomingSidebar';
import { StyledDisplay, StyledCardLink } from '../style/style';

function Airing({ rendered }) {
    const { airingAnime, isSearch, searchResults } = useGlobalContext();

    const conditionalRender = () => {
        if (!isSearch && rendered === 'airing') {
            return airingAnime?.map((anime) => (
                <StyledCardLink to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                    <div className="title">{anime.title}</div>
                </StyledCardLink>
            ));
        } else {
            return searchResults?.map((anime) => (
                <StyledCardLink to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                    <div className="title">{anime.title}</div>
                </StyledCardLink>
            ));
        }
    }

    return (
        <StyledDisplay>
            <LeftSidebar />
            <div className="display-anime">
                {conditionalRender()}
            </div>
            <RightSidebar />
        </StyledDisplay>
    );
}

export default Airing;
