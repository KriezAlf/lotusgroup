import React from 'react';
import { useGlobalContext } from '../context/global';
import { Link, useParams } from 'react-router-dom';
import { Box, Image, Grid } from '@chakra-ui/react';
import { GalleryStyled } from '../style/style';

function Gallery() {
  const { getAnimePictures, pictures } = useGlobalContext();
  const { id } = useParams();

  const [index, setIndex] = React.useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
  };

  React.useEffect(() => {
    getAnimePictures(id);
  }, [id]);

  return (
    <GalleryStyled>
      <Box className="back">
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>
      </Box>
      <Box className="big-image">
        <Image src={pictures[index]?.jpg.image_url} alt="" />
      </Box>
      <Box className="small-images">
        <Grid  display="flex" flexDirection="row"templateColumns="repeat(auto-fill, minmax(6rem, 1fr))" gap="0.5rem">
          {pictures?.map((picture, i) => {
            return (
              <Box
                className="image-con"
                onClick={() => {
                  handleImageClick(i);
                }}
                key={i}
              >
                <Image
                  src={picture?.jpg.image_url}
                  style={{
                    border: i === index ? '3px solid #27AE60' : '3px solid #e5e7eb',
                    filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                    transform: i === index ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all .3s ease-in-out',
                  }}
                  alt=""
                />
              </Box>
            );
          })}
        </Grid>
      </Box>
    </GalleryStyled>
  );
}

export default Gallery;
