import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link as Box } from "@chakra-ui/react";

export const StyledDisplay = styled(Box)`
  display: flex;

  background-color: #eeecf1;
  .display-anime {
    margin-top: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    grid-auto-rows: 500px;
    border-top: 5px solid #bbbbbb;
  }
`;

export const StyledCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 500px;
  border-radius: 5px;
  border: 5px solid #bbbbbb;
  transition: box-shadow 0.3s;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0 5px 2px #27ae60;
  }

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  .title {
    padding: 0.2rem;
    font-weight: bold;
  }
`;
export const SidebarStyled = styled.div`
  margin-top: 1rem;
  background-color: #fff;
  border-top: 5px solid #bbbbbb;
  padding-right: 5rem;
  padding-left: 5rem;
  padding-top: 1rem;

  background-color: #eeecf1;

  .anime {
    display: flex;
    flex-direction: column;
    width: 150px;
    img {
      width: 100%;
      border-radius: 5px;
      border: 5px solid #bbbbbb;
      &:focus,
      &:hover {
        outline: none;
        box-shadow: 0 0 5px 2px #27ae60;
      }
    }
    a {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      color: #444444;
      h4 {
        font-size: 1.1rem;
      }
    }
  }
`;

export const AnimeItemStyled = styled.div`
  padding: 3rem 2rem;

  background-color: #eeecf1;

  .back {
    position: absolute;
    top: 2rem;
    left: 2rem;

    a {
      font-weight: 600;
      text-decoration: none;
      color: #bbbbbb;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .title {
    display: inline-block;
    margin: 3rem 0;
    font-size: 2rem;
    cursor: pointer;
    background: linear-gradient(#e66465, #9198e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-color: #eeecf1;
  }

  .description {
    margin-top: 2rem;
    color: #777777;
    line-height: 1.5rem;

    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: #27ae60;
      font-weight: 600;
    }
  }

  .trailer-con {
    display: flex;
    justify-content: center;
    align-items: center;

    iframe {
      outline: none;
      border: 5px solid #e5e7eb;
      padding: 1.5rem;
      border-radius: 10px;
      background-color: #fff;

      background-color: #eeecf1;
    }
  }

  .details {
    background-color: #fff;
    border-radius: 20px;
    padding: 2rem;
    border: 5px solid #e5e7eb;

    .detail {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      img {
        border-radius: 7px;
      }
    }

    .anime-details {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        display: flex;
        gap: 1rem;
      }

      p span:first-child {
        font-weight: 600;
        color: #454e56;
      }
    }
  }

  .characters {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    background-color: #fff;
    padding: 2rem;
    border-radius: 20px;
    border: 5px solid #e5e7eb;

    .character {
      padding: 0.4rem 0.6rem;
      border-radius: 7px;
      background-color: #ededed;
      transition: all 0.4s ease-in-out;

      img {
        width: 100%;
      }

      h4 {
        padding: 0.5rem 0;
        color: #454e56;
      }

      p {
        color: #27ae60;
      }

      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  h1 {
    display: inline-block;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    background: linear-gradient(to right, #a855f7, #27ae60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: skew(-3deg);
    }
  }
`;
export const GalleryStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .back {
    position: absolute;
    top: 2rem;
    left: 2rem;
    a {
      font-weight: 600;
      text-decoration: none;
      color: #eb5757;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
  .big-image {
    display: inline-block;
    padding: 2rem;
    margin: 2rem 0;
    background-color: #fff;
    border-radius: 7px;
    border: 5px solid #e5e7eb;
    position: relative;
    img {
      width: 350px;
    }
  }

  .small-images {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 80%;
    padding: 2rem;
    border-radius: 7px;
    background-color: #fff;
    border: 5px solid #e5e7eb;
    img {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
      cursor: pointer;
      border-radius: 5px;
      border: 3px solid #e5e7eb;
    }
  }
`;
