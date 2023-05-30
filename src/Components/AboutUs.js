import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useGlobalContext } from '../context/global';
import RightSidebar from './PopularSidebar';
import LeftSidebar from './UpcomingSidebar';
import { StyledDisplay, StyledCardLink } from '../style/style';
import Caroline from "../Image/Caroline.jpg";
import Michael from "../Image/Michael.jpeg";
import Steven from "../Image/Steven.jpg";
import Reynata from "../Image/Reynata.jpg";

function AboutUs({ rendered }) {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === 'aboutus') {
      return (
        <Flex justifyContent="center">
          <Flex>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
              <Image src={Caroline} alt="Caroline" />
              <Box p="4">
                <Text fontSize="xl" fontWeight="bold">
                  Caroline Susanto (00000071280)
                </Text>
                <Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Text>
              </Box>
            </Box>

            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
              <Image src={Steven} alt="Steven" />
              <Box p="4">
                <Text fontSize="xl" fontWeight="bold">
                  Ignatius Steven (00000070642)
                </Text>
                <Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Text>
              </Box>
            </Box>
          </Flex>

          <Flex>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
              <Image src={Michael} alt="Michael" />
              <Box p="4">
                <Text fontSize="xl" fontWeight="bold">
                  Michael Vallent (00000071361)
                </Text>
                <Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Text>
              </Box>
            </Box>

            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
              <Image src={Reynata} alt="Reynata" />
              <Box p="4">
                <Text fontSize="xl" fontWeight="bold">
                  Reynata Prajnadi Tangajaya (00000070461)
                </Text>
                <Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
      );
    } else {
      return null;
    }
  }

  return (
    <StyledDisplay>
      <LeftSidebar />
      <div>
        {conditionalRender()}
      </div>
      <RightSidebar />
    </StyledDisplay>
  );
}

export default AboutUs;
