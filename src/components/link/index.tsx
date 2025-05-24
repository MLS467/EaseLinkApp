import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  _name: string;
  url: string;
  onDetails: () => void;
};

export const Link = ({ _name, url, onDetails }: Props) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.contentText} numberOfLines={1}>
          {_name}
        </Text>

        <Text style={style.contentUrl} numberOfLines={1}>
          {url}
        </Text>
      </View>

      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={16} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  );
};
