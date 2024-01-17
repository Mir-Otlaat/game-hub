import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Button, Image, List, ListItem, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectedGenres: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenres, selectedGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <List>
        {genres.map((g) => (
          <ListItem key={g.id} paddingY="2">
            <Image boxSize={"32px"} src={g.image_background} />
            <Button variant="link" onClick={() => onSelectedGenres(g)}>
              {g.id === selectedGenre?.id ? (
                <b color="red">{g.name}</b>
              ) : (
                g.name
              )}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
