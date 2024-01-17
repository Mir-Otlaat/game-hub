import { AxiosRequestConfig } from './../../node_modules/axios/index.d';

import React, { useEffect, useState } from "react";
import AppClient, { CanceledError } from "../services/api-client";
import { Genre } from "./useGenres";

export interface Platform {
    id: number,
    name: string,
    slug: string,
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }
  
  interface GamesResponse {
    count: number;
    results: Game[];
  }

const useGames= (s: Genre | null, searchText: string | '') => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    AppClient.get<GamesResponse>("/games", { signal: controller.signal, params: {genres: s?.id, search: searchText } })
      .then((res) => {
        console.log(res);
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        //console.log(err);
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    //cancel the request
    return () => controller.abort();
  }, [s?.id, searchText]);

  return {games, error, isLoading};
}

export default useGames;