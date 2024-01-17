import React from "react";
import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  genreHeading: Genre | null;
}

const GameHeading = ({ genreHeading }: Props) => {
  return <Heading>{"Selected: " + genreHeading?.name}</Heading>;
};

export default GameHeading;
