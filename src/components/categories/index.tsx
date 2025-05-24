import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { style } from "./styles";

export const Categories = () => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category _icon={item.icon} _text={item.name} isSelected={false} />
      )}
      horizontal
      style={style.container}
      contentContainerStyle={style.content}
      showsHorizontalScrollIndicator={false}
    />
  );
};
