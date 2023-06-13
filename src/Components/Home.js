import React from "react";
import { useGlobalContext } from "../context/global";
import Popular from "./Popular";
import { Box, Button, Input, Flex } from "@chakra-ui/react";
import Upcoming from "./Upcoming";
import Airing from "./Airing";
import AboutUs from "./AboutUs";
import LogoImage from "../Image/logo lotus.png";

const Logo = () => {
  const logoStyle = {
    width: "60px",
    height: "49px",
  };

  return (
    <div className="Gambar" style={{ position: "relative", top: "-15px" }}>
      <img className="Logo" src={LogoImage} alt="Example" style={logoStyle} />
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
      case "aboutus":
        return <AboutUs rendered={rendered} />;
      default:
        return (
          <>
            <Popular rendered={rendered} />
            <Airing rendered={rendered} />
            <Upcoming rendered={rendered} />
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
      <Box
        py="2rem"
        px={{ base: "1rem", md: "5rem" }}
        maxW="60%"
        mx="auto"
        transition="all .4s ease-in-out"
      >
        <Flex direction="column" align="center" mb="0.5rem">
          <Logo />
          <h1
            style={{
              width: "261px",
              height: "96px",
              fontFamily: "Actor",
              fontStyle: "normal",
              fontWeight: "200",
              fontSize: "30px",
              textAlign: "center",
              letterSpacing: "0.05em",
              color: "white",
              position: "relative",
              top: "-15px",
            }}
          >
            Our List
          </h1>
        </Flex>
        <Flex
          align="center"
          justify="center"
          gap="1rem"
          top="20px"
          mb="0.5rem"
          flexWrap="wrap"
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
          <Button
            onClick={() => handleRenderedChange("aboutus")}
            variant={rendered === "aboutus" ? "solid" : "outline"} // Menggunakan variant solid saat aboutus dipilih
            style={{
              color: "white",
            }}
          >
            About Us
          </Button>
        </Flex>
        <Box as="form" onSubmit={handleSubmit}>
          <Flex align="center" justify="center">
            <Input
              type="text"
              placeholder="Search Anime"
              value={search}
              onChange={handleChange}
              style={{
                width: "418px",
                height: "30px",
                background: "white",
                mixBlendMode: "normal",
                borderRadius: "5px",
                marginRight: "1rem",
              }}
              size="md"
            />
            <Button type="submit" height="30px">
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