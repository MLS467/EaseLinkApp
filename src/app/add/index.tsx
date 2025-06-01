import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import Input from "@/components/Input";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

type valueUrl = {
  nameValue: string;
  urlValue: string;
};

const Add = () => {
  const router = useRouter();
  const [category, setCategory] = useState(categories[0].name);
  const [InputValue, setInputValue] = useState<valueUrl>({
    nameValue: "",
    urlValue: "",
  });

  const handleInput = (key: keyof valueUrl, value: string) => {
    setInputValue((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveData = () => {
    try {
      if (!category) {
        throw new Error("Informe a categoria");
      }

      if (!InputValue.nameValue.trim()) {
        throw new Error("Informe o nome");
      }

      if (!InputValue.urlValue.trim()) {
        throw new Error("Informe a url");
      }

      console.log({ ...InputValue, category: category });
    } catch (error: any) {
      Alert.alert("erro", error.message);
    }
  };

  return (
    <View style={style.addContainer}>
      <View style={style.addHeader}>
        <View style={style.addBackAndTitle}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons
              name="arrow-back"
              size={32}
              color={colors.gray[300]}
            />
          </TouchableOpacity>
          <Text style={style.addLabel}>Selecione uma categoria</Text>
        </View>

        <Text style={style.addTitle}>Novo</Text>
      </View>

      <Categories selected={category} onChange={setCategory} />

      <View style={style.form}>
        <Input
          _placeholder="Nome"
          onChangeText={(value) => handleInput("nameValue", value)}
        />
        <Input
          _placeholder="URL"
          onChangeText={(value) => handleInput("urlValue", value)}
        />
        <Button title="Adicionar" onPress={handleSaveData} />
      </View>
    </View>
  );
};

export default Add;
