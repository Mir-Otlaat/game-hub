import React from "react";
import { Platform } from "../hooks/useGames";

interface Props {
  icontext: Platform[];
}

const PlatFormIconLists = ({ icontext }: Props) => {
  //console.log("icontext", icontext);
  return (
    <>
      {icontext.map((m) => (
        <p>{m.slug}</p>
      ))}
    </>
  );
};

export default PlatFormIconLists;
