import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  Image,
  Badge,
  HStack,
} from "@chakra-ui/react";
import PlatFormIconLists from "./PlatFormIconLists";

interface Props {
  game: Game;
}

const GamesCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatFormIconLists
            icontext={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIconLists>
          <Badge>{game.metacritic}</Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GamesCard;
