import { useEffect, useState } from "react";
import { getProducts } from "../services/productsServices";

export function useProducts() {
  const [data, setData] = useState({ combos: [], stock: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const res = await getProducts();
        if (!alive) return;
        setData(res);
      } catch (e) {
        if (!alive) return;
        setError("No se pudieron cargar los productos.");
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, []);

  return { ...data, loading, error };
}