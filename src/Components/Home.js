import React from 'react';
import { useGlobalContext } from '../context/global';
import Popular from './Popular';
import { Box, Button, Input, Flex } from '@chakra-ui/react';
import Upcoming from './Upcoming';
import Airing from './Airing';

function Home() {
  const {
    handleSubmit,
    search,
    //SearchAnime,
    handleChange,
    getUpcomingAnime,
    getAiringAnime,
    //getPopularAnime,
  } = useGlobalContext();

  const [rendered, setRendered] = React.useState('popular');

  const switchComponent = () => {
    switch (rendered) {
      case 'popular':
        return <Popular rendered={rendered} />;
      case 'airing':
        return <Airing rendered={rendered} />;
      case 'upcoming':
        return <Upcoming rendered={rendered} />;
      default:
        return (
          <>
            <Popular rendered={rendered} />
            <Airing rendered={rendered} />
          </>
        );
    }
  };
  

  const handleRenderedChange = (type) => {
    setRendered(type);

    if (type === 'airing') {
      getAiringAnime();
    } else if (type === 'upcoming') {
      getUpcomingAnime();
    }
  };

  return (
    <Box>
      <Box py="2rem" px={{ base: '1rem', md: '5rem' }} maxW="60%" mx="auto" transition="all .4s ease-in-out">
        <Flex direction="column" align="center" mb="2rem">
          <h1>{rendered === 'popular' ? 'Popular Anime' : rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}</h1>
        </Flex>
        <Flex align="center" justify="center" gap="1rem">
          <Button onClick={() => handleRenderedChange('popular')} variant="outline">
            Popular
          </Button>
          <Button onClick={() => handleRenderedChange('airing')} variant="outline">
            Airing
          </Button>
          <Button onClick={() => handleRenderedChange('upcoming')} variant="outline">
            Upcoming
          </Button>
          <Box as="form" onSubmit={handleSubmit}>
            <Flex align="center">
              <Input
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
                borderRadius="30px"
                border="5px solid #e5e7eb"
                size="md"
              />
              <Button type="submit">Search</Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
      {switchComponent()}
    </Box>
  );
}

export default Home;
