import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  SkeletonText,
  HStack,
  Skeleton,
  CardBody,
} from "@chakra-ui/react";

const GamesCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GamesCardSkeleton;
