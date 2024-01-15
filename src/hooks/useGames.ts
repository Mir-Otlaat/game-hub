
import React, { useEffect, useState } from "react";
import AppClient, { CanceledError } from "../services/api-client";


interface Game {
    id: number;
    name: string;
  }
  
  interface GamesResponse {
    count: number;
    results: Game[];
  }

const useGames= () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    AppClient.get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        console.log(res);
        setGames(res.data.results);
      })
      .catch((err) => {
        //console.log(err);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    //cancel the request
    return () => controller.abort();
  }, []);

  return {games, error};
}

export default useGames;