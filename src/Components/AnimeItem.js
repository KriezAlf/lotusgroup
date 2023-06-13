import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';
import { AnimeItemStyled } from '../style/style';

function AnimeItem() {
  const { id } = useParams();

  const [anime, setAnime] = React.useState({});
  const [characters, setCharacters] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  //get anime based on id
  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  //get characters
  const getCharacters = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`);
    const data = await response.json();
    setCharacters(data.data);
  };

  //initial render
  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  return (
    <AnimeItemStyled>
      <div className="back">
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
      </div>
      <h1>{title}</h1>
      <Box className="details">
        <Box p={4} display={{ md: 'flex' }}>
          <Box flexShrink={0} maxWidth={{ md: '40%' }}>
            <Box className="detail">
              <Box className="image">
                <img src={images?.jpg.large_image_url} alt="" />
              </Box>
            </Box>
          </Box>
          <Box ml={{ md: '4' }} flex={{ md: '1' }}>
            <Box className="anime-details">
              <Text>
                <Text as="span">Aired:</Text>
                <Text as="span">{aired?.string}</Text>
              </Text>
              <Text>
                <Text as="span">Rating:</Text>
                <Text as="span">{rating}</Text>
              </Text>
              <Text>
                <Text as="span">Rank:</Text>
                <Text as="span">{rank}</Text>
              </Text>
              <Text>
                <Text as="span">Score:</Text>
                <Text as="span">{score}</Text>
              </Text>
              <Text>
                <Text as="span">Scored By:</Text>
                <Text as="span">{scored_by}</Text>
              </Text>
              <Text>
                <Text as="span">Popularity:</Text>
                <Text as="span">{popularity}</Text>
              </Text>
              <Text>
                <Text as="span">Status:</Text>
                <Text as="span">{status}</Text>
              </Text>
              <Text>
                <Text as="span">Source:</Text>
                <Text as="span">{source}</Text>
              </Text>
              <Text>
                <Text as="span">Season:</Text>
                <Text as="span">{season}</Text>
              </Text>
              <Text>
                <Text as="span">Duration:</Text>
                <Text as="span">{duration}</Text>
              </Text>
            </Box>
          </Box>
        </Box>
        <Text className="description">
          {showMore ? synopsis : `${synopsis?.substring(0, 450)}...`}
          <Button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? 'Show Less' : 'Read More'}
          </Button>
        </Text>
      </Box>
      <h3 className="title">Trailer</h3>
      <Box className="trailer-con">
        {trailer?.embed_url ? (
          <iframe
            src={trailer?.embed_url}
            title="Inline Frame Example"
            width="800"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <h3>Trailer not available</h3>
        )}
      </Box>
      <h3 className="title">Characters</h3>
      <Box className="characters">
        {characters?.map((character, index) => {
          const { role } = character;
          const { images, name, mal_id } = character.character;
          return (
            <Link to={`/character/${mal_id}`} key={index}>
              <Box className="character">
                <img src={images?.jpg.image_url} alt="" />
                <h4>{name}</h4>
                <p>{role}</p>
              </Box>
            </Link>
          );
        })}
      </Box>
    </AnimeItemStyled>
  );
}

export default AnimeItem;
