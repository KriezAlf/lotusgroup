import React from "react";
import { useGlobalContext } from "../context/global";
import Popular from "./Popular";
import { Box, Button, Input, Flex } from "@chakra-ui/react";
import Upcoming from "./Upcoming";
import Airing from "./Airing";
import LogoImage from "../Image/LOGO.png";

const Logo = () => {
  const logoStyle = {
    position: "absolute",
    width: "60px",
    height: "49px",
  };

  return (
    <div className="Gambar">
      <img className="Logo" src={LogoImage} alt="Example" style={logoStyle} />
    </div>
  );
};

const MyComponent = () => {
  return (
    <div id="Utama">
      <Logo />
    </div>
  );
};

function Home() {
  const {
    handleSubmit,
    search,
    handleChange,
    getUpcomingAnime,
    getAiringAnime,
  } = useGlobalContext();

  const [rendered, setRendered] = React.useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      case "upcoming":
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

    if (type === "airing") {
      getAiringAnime();
    } else if (type === "upcoming") {
      getUpcomingAnime();
    }
  };

  return (
    <Box style={{ backgroundColor: "Black" }}>
      <MyComponent /> {/* Include the MyComponent here */}
      <Box
        py="2rem"
        px={{ base: "1rem", md: "5rem" }}
        maxW="60%"
        mx="auto"
        transition="all .4s ease-in-out"
      >
        <Flex direction="column" align="center" mb="2rem">
          <h1
            style={{
              position: "absolute",
              width: "261px",
              height: "96px",
              top: "15px",
              fontFamily: "Actor",
              fontStyle: "normal",
              fontWeight: "200",
              fontSize: "30px",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "white",
            }}
          >
            Our List
          </h1>
        </Flex>
        <Flex
          align="center"
          justify="center"
          gap="1rem"
          top="125px" // Add the top property here
        >
          <Button
            onClick={() => handleRenderedChange("popular")}
            variant="outline"
            style={{
              color: "white",
            }}
          >
            Popular
          </Button>
          <Button
            onClick={() => handleRenderedChange("airing")}
            variant="outline"
            style={{
              color: "white",
            }}
          >
            Airing
          </Button>
          <Button
            onClick={() => handleRenderedChange("upcoming")}
            variant="outline"
            style={{
              color: "white",
            }}
          >
            Upcoming
          </Button>
        </Flex>
        <Box as="form" onSubmit={handleSubmit}>
          <Flex align="center">
            <Input
              type="text"
              placeholder="Search Anime"
              value={search}
              onChange={handleChange}
              style={{
                position: "absolute",
                width: "418px",
                height: "30px",
                background: "white",
                mixBlendMode: "normal",
                borderRadius: "5px",
                top: "110px",
                left: "350px",
              }}
              size="md"
            />
            <Button
              type="submit"
              style={{
                position: "absolute",
                borderRadius: "5px",
                left: "800px",
                top: "110px",

                height: "30px",
              }}
            >
              Search
            </Button>
          </Flex>
        </Box>
      </Box>
      {switchComponent()}
    </Box>
  );
}

export default Home;
