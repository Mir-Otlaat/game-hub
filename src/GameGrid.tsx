import { Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {games.map((gm) => (
        <ul>
          <li key={gm.id}>{gm.name}</li>
        </ul>
      ))}
    </>
  );
};

export default GameGrid;
