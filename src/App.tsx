import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem>Aside</GridItem>
      </Show>
      <GridItem>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
