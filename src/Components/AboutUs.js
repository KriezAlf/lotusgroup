import React from "react";
import { Box, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { useGlobalContext } from "../context/global";
import RightSidebar from "./PopularSidebar";
import LeftSidebar from "./UpcomingSidebar";

import { SidebarStyled } from "../style/style";
import { StyledDisplay, StyledCardLink } from "../style/style";
import Caroline from "../Image/Caroline.jpg";
import Michael from "../Image/Michael.jpeg";
import Steven from "../Image/Steven.jpg";
import Reynata from "../Image/Reynata.jpg";

function AboutUs({ rendered }) {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "aboutus") {
      return (
        <SimpleGrid columns={1} spacing="150px">
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            display="flex"
            alignItems="center"
            p="4"
          >
            <Image
              src={Reynata}
              alt="Reynata"
              width="150px"
              height="auto"
              mr="4"
            />
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Reynata Prajnadi Tangajaya (00000070461)
              </Text>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Text>
            </Box>
          </Box>

          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            display="flex"
            alignItems="center"
            p="4"
          >
            <Image
              src={Steven}
              alt="Steven"
              width="150px"
              height="auto"
              mr="4"
            />
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Ignatius Steven (00000070642)
              </Text>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Text>
            </Box>
          </Box>

          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            display="flex"
            alignItems="center"
            p="4"
          >
            <Image
              src={Caroline}
              alt="Caroline"
              width="150px"
              height="auto"
              mr="4"
            />
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Caroline Susanto (00000071280)
              </Text>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Text>
            </Box>
          </Box>

          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            display="flex"
            alignItems="center"
            p="4"
          >
            <Image
              src={Michael}
              alt="Michael"
              width="150px"
              height="auto"
              mr="4"
            />
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Michael Vallent (00000071361)
              </Text>
              <Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      );
    }
  };

  return (
    <SidebarStyled>
      <Flex>
        <LeftSidebar />
        <Box flex="1" mx="4">
          {conditionalRender()}
        </Box>
        <RightSidebar />
      </Flex>
    </SidebarStyled>
  );
}

export default AboutUs;