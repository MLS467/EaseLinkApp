import { MaterialIcons } from "@expo/vector-icons";

type Categories = {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: Categories[] = [
  { id: "1", name: "Curso", icon: "healing" },
  { id: "2", name: "Curso", icon: "access-time" },
];
