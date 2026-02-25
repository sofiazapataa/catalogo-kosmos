// src/data/products.js
import aceiteLimpieza from "../assets/images/aceite-limpieza.jpg";
import cremaHidratante from "../assets/images/crema-hidratante.jpg";
import refilLimpieza from "../assets/images/refil-limpieza.jpg";
import serumHidratante from "../assets/images/serum-hidratante.jpg";
import serumNiacinamida from "../assets/images/serum-niacinamida.jpg";
import serumReafirmante from "../assets/images/serum-reafirmante.jpg";
import tonicoExfoliante from "../assets/images/tonico-exfoliante.jpg";

// ✅ Combos
export const combos = [
  {
    id: "combo-hidratante",
    title: "Combo Hidratante",
    desc: "Serum hidratante + Crema Facial Hidratante",
    price: 12300,
    discount: 20,
    category: "combo",
    type: "combos",
    image: comboLimpieza,
  },
  {
    id: "combo-renovador",
    title: "Combo Renovador",
    desc: "Serum renovador + Crema noche",
    price: 13800,
    discount: 20,
    category: "combo",
    type: "combos",
    image: comboRefresh,
  },
  {
    id: "combo-protector",
    title: "Combo Protector",
    desc: "Protector solar + Gel limpiador",
    price: 14900,
    discount: 20,
    category: "combo",
    type: "combos",
  },
];

// ✅ Productos en stock
export const stock = [
  {
    id: "serum-hidratante",
    title: "Serum Hidratante",
    desc: "Ácido hialurónico + pantenol",
    price: 12300,
    discount: 20,
    category: "stock",
    type: "serums",
    image: serumHidratante,
  },
  {
    id: "crema-hidratante",
    title: "Crema Facial Hidratante",
    desc: "Ceramidas + niacinamida",
    price: 10900,
    discount: 0,
    category: "stock",
    type: "cremas",
    image: cremaHidratante,
  },
  {
    id: "aceite-limpieza",
    title: "Aceite de Limpieza",
    desc: "Limpieza profunda sin resecar",
    price: 10900,
    discount: 0,
    category: "stock",
    type: "limpieza",
    image: aceiteLimpieza,
  },
  {
    id: "refil-limpieza",
    title: "Refil Limpieza",
    desc: "Refill para tu producto de limpieza",
    price: 8900,
    discount: 10,
    category: "stock",
    type: "limpieza",
    image: refilLimpieza,
  },
  {
    id: "serum-niacinamida",
    title: "Serum Niacinamida",
    desc: "Poros + luminosidad",
    price: 11900,
    discount: 10,
    category: "stock",
    type: "serums",
    image: serumNiacinamida,
  },
  {
    id: "serum-reafirmante",
    title: "Serum Reafirmante",
    desc: "Firmeza y elasticidad",
    price: 13900,
    discount: 0,
    category: "stock",
    type: "serums",
    image: serumReafirmante,
  },
  {
    id: "tonico-exfoliante",
    title: "Tónico Exfoliante",
    desc: "Renovación suave",
    price: 9900,
    discount: 5,
    category: "stock",
    type: "tonicos",
    image: tonicoExfoliante,
  },
];