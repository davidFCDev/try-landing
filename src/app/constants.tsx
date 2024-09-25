import { ClassItemType } from "./modules/home/components/classitem";

export const CLASS: ClassItemType[] = [
  {
    id: 1,
    style: "flex flex-col sm:flex-row ",
    initial: { opacity: 0, y: 50 },
    title: {
      red: "W",
      end: "OD",
    },
    subtitle: "Workout of the day, nuestra clase más exigente",
    description:
      "Est ipsum ea officia amet occaecat sint tempor. Qui et duis ad ex labore qui occaecat deserunt sunt magna aliqua cillum. Adipisicing nisi irure enim consectetur et. Id ut laborum amet esse id amet ad aliqua sunt in ad.",
    image: "/images/wod.jpg",
  },
  {
    id: 2,
    style: "flex flex-col sm:flex-row-reverse",
    initial: { opacity: 0, y: 50 },
    title: {
      first: "TR",
      red: "H",
      end: "YROX",
    },
    subtitle: "Si te gusta quemar calorías, esta es tu clase",
    description:
      "Est ipsum ea officia amet occaecat sint tempor. Qui et duis ad ex labore qui occaecat deserunt sunt magna aliqua cillum. Adipisicing nisi irure enim consectetur et. Id ut laborum amet esse id amet ad aliqua sunt in ad.",
    image: "/images/thryrox.jpg",
  },
  {
    id: 3,
    style: "flex flex-col sm:flex-row ",
    initial: { opacity: 0, y: 50 },
    title: {
      first: "TRY4",
      red: "5",
    },
    subtitle: "Entrenamientos específicos de 45 minutos",
    description:
      "Est ipsum ea officia amet occaecat sint tempor. Qui et duis ad ex labore qui occaecat deserunt sunt magna aliqua cillum. Adipisicing nisi irure enim consectetur et. Id ut laborum amet esse id amet ad aliqua sunt in ad.",
    image: "/images/wod.jpg",
  },
  {
    id: 4,
    style: "flex flex-col sm:flex-row-reverse ",
    initial: { opacity: 0, y: 50 },
    title: {
      first: "YOGA FLO",
      red: "W",
    },
    subtitle: "Conecta tu cuerpo, respiración y mente",
    description:
      "Est ipsum ea officia amet occaecat sint tempor. Qui et duis ad ex labore qui occaecat deserunt sunt magna aliqua cillum. Adipisicing nisi irure enim consectetur et. Id ut laborum amet esse id amet ad aliqua sunt in ad.",
    image: "/images/yoga2.jpg",
  },
  {
    id: 5,
    style: "flex flex-col sm:flex-row ",
    initial: { opacity: 0, y: 50 },
    title: {
      red: "R",
      end: "UNNING",
    },
    subtitle: "No importa si eres nuevo o experto",
    description:
      "Est ipsum ea officia amet occaecat sint tempor. Qui et duis ad ex labore qui occaecat deserunt sunt magna aliqua cillum. Adipisicing nisi irure enim consectetur et. Id ut laborum amet esse id amet ad aliqua sunt in ad.",
    image: "/images/running.jpg",
  },
];
