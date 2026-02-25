import { combos, stock } from "../data/products";

/**
 * Contrato estable:
 * - Devuelve { combos: [], stock: [] }
 * - En el futuro esto se reemplaza por Firestore sin tocar HomePage
 */
export async function getProducts() {
  // Simulamos asincronía para que el día de mañana Firebase encaje perfecto
  await new Promise((r) => setTimeout(r, 150));

  return {
    combos,
    stock,
  };
}