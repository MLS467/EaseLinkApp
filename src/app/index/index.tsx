import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { styles } from "./index";

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/image/logo.png")}
        />
        <TouchableOpacity
          onPress={() => {
            console.log("Testando...dsadasd");
          }}
        >
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
