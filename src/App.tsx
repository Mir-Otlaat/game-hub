import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
        <GridItem bg="cyan.500">Aside</GridItem>
      </Show>
      <GridItem bg="pink.500">Main</GridItem>
    </Grid>
  );
}

export default App;
