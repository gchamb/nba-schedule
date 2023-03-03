import { useEffect, useState } from "react";
import { Match } from "../types/schedule";

export default function useSchedule(): [Match[] | null, boolean, string] {
  const [data, setData] = useState<Match[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getSchedule = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${import.meta.env.VITE_API_URL}/schedule`);
        if (!response.ok) {
          setError("Unable to fetch schedule!");
          return;
        }

        const data = (await response.json()) as Match[];

        setLoading(false);

        setData(data);
      } catch (err: unknown) {
        setLoading(false);

        if (err instanceof Error) {
          setError(err.message);
          return;
        }

        setError(String(err));
      }
    };

    getSchedule();
  }, []);

  return [data, loading, error];
}
