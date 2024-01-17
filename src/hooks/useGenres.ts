
import React, { useEffect, useState } from "react";
import AppClient, { CanceledError } from "../services/api-client";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
  }
  
  interface GenreResponse {
    count: number;
    results: Genre[];
  }

const useGenres= () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    AppClient.get<GenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        console.log(res);
        setGenres(res.data.results);
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
  }, []);

  return {genres, error, isLoading};
}

export default useGenres;