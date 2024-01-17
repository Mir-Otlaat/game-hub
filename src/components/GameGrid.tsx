import { Text, SimpleGrid, Box } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GamesCard from "./GamesCard";
import GamesCardSkeleton from "./GamesCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  sGenre: Genre | null;
  sSearchText: string | "";
}

const GameGrid = ({ sGenre, sSearchText }: Props) => {
  const { games, error, isLoading } = useGames(sGenre, sSearchText);

  const gamesDummydata = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      {isLoading && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {gamesDummydata.map((gm) => (
            <GamesCardSkeleton></GamesCardSkeleton>
          ))}
        </SimpleGrid>
      )}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
        {games.map((gm) => (
          <Box borderRadius={10} overflow="hidden">
            <GamesCard key={gm.id} game={gm}></GamesCard>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
