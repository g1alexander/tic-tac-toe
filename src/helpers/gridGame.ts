import IconO from "@assets/icon-o.svg";
import IconX from "@assets/icon-x.svg";

interface GridGame {
  id: number;
  value: string;
  icon: string;
}

export const gridGame: GridGame[] = [
  {
    id: 1,
    value: "",
    icon: "",
  },
  {
    id: 2,
    value: "X",
    icon: IconX,
  },
  {
    id: 3,
    value: "O",
    icon: IconO,
  },
  {
    id: 4,
    value: "X",
    icon: IconX,
  },

  {
    id: 5,
    value: "O",
    icon: IconO,
  },
  {
    id: 6,
    value: "X",
    icon: IconX,
  },
  {
    id: 7,
    value: "",
    icon: "",
  },
  {
    id: 8,
    value: "O",
    icon: IconO,
  },
  {
    id: 9,
    value: "X",
    icon: IconX,
  },
];
