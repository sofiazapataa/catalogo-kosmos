// src/data/products.js

// Imágenes que ya tenés (reutilizadas para no romper deploy)
import aceiteLimpieza from "../assets/images/aceite-limpieza.jpg";
import cremaReparadora from "../assets/images/crema-reparadora.jpg";
import cremaSuave from "../assets/images/crema-suave.jpg";
import refilLimpieza from "../assets/images/refil-limpieza.jpg";
import serumHidratante from "../assets/images/serum-hidratante.jpg";
import serumNiacinamida from "../assets/images/serum-niacinamida.jpg";
import serumOil from "../assets/images/serum-betaOil.jpg";
import tonicoExfoliante from "../assets/images/tonico-exfoliante.jpg";
import jabonLimpieza from "../assets/images/jabon-limpieza.jpg";

import comboLimpieza from "../assets/images/combo-limpieza.jpg";
import comboRefresh from "../assets/images/combo-refresh.jpg";

// ✅ Combos
export const combos = [
  {
    id: "combo-limpieza",
    title: "Combo Limpieza",
    desc: "Cleansing Bubbles 200ML + Cleansing Oil 125ML",
    price: 69800,
    discount: 5,
    category: "combo",
    type: "combos",
    image: comboLimpieza,
  },
  {
    id: "combo-rutina-glow",
    title: "Combo Rutina Glow",
    desc: "Boosting Drops + Smooth Potion + Purifying Toner",
    price: 125700,
    discount: 5,
    category: "combo",
    type: "combos",
    image: comboRefresh,

  },
  {
    id: "combo-rutina-completa",
    title: "Combo Rutina Completa",
    desc: "Cleansing Bubbles + Boosting Drops + Smooth Potion + Purifying Toner",
    price: 162800,
    discount: 5,
    category: "combo",
    type: "combos",
     image: comboLimpieza,
  },
];

// ✅ Productos en stock (tu compra mayorista)
export const stock = [
  // LIMPIEZA
  {
    id: "cleansing-bubbles-200",
    title: "Cleansing Bubbles 200ML",
    desc: "Gel de limpieza",
    price: 39100,
    discount: 0,
    category: "stock",
    type: "limpieza",
    image: jabonLimpieza, 
  },
  {
    id: "rf-cleansing-bubbles-200",
    title: "RF Cleansing Bubbles 200ML",
    desc: "Refill para Cleansing Bubbles",
    price: 27300,
    discount: 0,
    category: "stock",
    type: "limpieza",
    image: refilLimpieza,
  },
  {
    id: "cleansing-oil-125",
    title: "Cleansing Oil 125ML",
    desc: "Aceite de limpieza",
    price: 34400,
    discount: 0,
    category: "stock",
    type: "limpieza",
    image: aceiteLimpieza,
  },

  // TÓNICOS
  {
    id: "purifying-toner",
    title: "Purifying Toner",
    desc: "Tónico purificante",
    price: 39100,
    discount: 0,
    category: "stock",
    type: "tonicos",
    image: tonicoExfoliante, // (reemplazar por foto real luego)
  },

  // SERUMS
  {
    id: "boosting-drops",
    title: "Boosting Drops",
    desc: "Serum booster para potenciar tu rutina",
    price: 47900,
    discount: 0,
    category: "stock",
    type: "serums",
    image: serumHidratante,
  },
  {
    id: "balancing-drops",
    title: "Balancing Drops",
    desc: "Balance y control",
    price: 43800,
    discount: 0,
    category: "stock",
    type: "serums",
    image: serumNiacinamida,
  },
  {
    id: "beta-glow-oil",
    title: "Beta Glow Oil",
    desc: "Aceite glow",
    price: 39100,
    discount: 0,
    category: "stock",
    type: "serums",
    image: serumOil, 
  },

  // CREMAS
  {
    id: "smooth-potion",
    title: "Smooth Potion",
    desc: "Crema hidratante facial",
    price: 45300,
    discount: 0,
    category: "stock",
    type: "cremas",
    image: cremaHidratanteSuave,
  },
  {
    id: "aqua-potion",
    title: "Aqua Potion",
    desc: "Hidratación ligera",
    price: 46400,
    discount: 0,
    category: "stock",
    type: "cremas",
    image: cremaHidratanteReparadora, // (reemplazar por foto real luego)
  },
];