import React, { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import GameHeading from "./components/GameHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedSearchText, setSelectedSearchText] = useState<string>("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem>
        <NavBar
          onSearchNav={(searchText) => setSelectedSearchText(searchText)}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem>
          <GenreList
            onSelectedGenres={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem>
        <GameHeading genreHeading={selectedGenre} />
        <GameGrid sGenre={selectedGenre} sSearchText={selectedSearchText} />
      </GridItem>
    </Grid>
  );
}

export default App;
