import React from 'react';
import { useGlobalContext } from '../context/global';
import RightSidebar from './AiringSidebar';
import LeftSidebar from './UpcomingSidebar';
import { StyledDisplay, StyledCardLink } from '../style/style';

function Popular({ rendered }) {
  const { popularAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === 'popular') {
      return popularAnime?.map((anime) => (
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

export default Popular;
