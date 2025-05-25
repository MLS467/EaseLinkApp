import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "../../components/link";
import { colors } from "../../styles/colors";
import { styles } from "./index";

import { Categories } from "../../components/categories";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  const testeLink = {
    url: "https://www.google.com.br/search?q=cachorro+fofo&sca_esv=fa723bccb4ce9e36&hl=pt-BR&authuser=0&sxsrf=AE3TifONMGFJpoHutjUOY1NY8oZyRFNPow:1748118677858&source=hp&biw=1366&bih=645&ei=lSwyaMnpMNTR1sQPo4i94QU&iflsig=AOw8s4IAAAAAaDI6pQClHtqk17Pu9OnnYW40AbXPlrPO&udm=2#vhid=3EQfxM2BWf9W_M&vssid=mosaic",
    name: "Cachorro fofo",
  };

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

      <Categories />

      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            _name={testeLink.name}
            url={testeLink.url}
            onDetails={() => setIsVisible(true)}
          />
        )}
        style={styles.containerList}
        contentContainerStyle={styles.contentList}
        showsVerticalScrollIndicator={true}
      />

      <Modal transparent visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Curso</Text>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <MaterialIcons
                  name="close"
                  size={16}
                  color={colors.gray[300]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.modalUrl}>
            <Link
              _name="batata"
              url="www.teste.com.br"
              onDetails={() => console.log("batata")}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
