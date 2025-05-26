import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import Input from "@/components/Input";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

type valueUrl = {
  nameValue: string;
  urlValue: string;
};

const Add = () => {
  const router = useRouter();
  const [InputValue, setInputValue] = useState<valueUrl>({
    nameValue: "",
    urlValue: "",
  });

  const handleInput = (key: keyof valueUrl, value: string) => {
    setInputValue((prev) => ({ ...prev, [key]: value }));
    console.log(InputValue);
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

      <Categories />

      <View style={style.form}>
        <Input
          _placeholder="Nome"
          onChangeText={(value) => handleInput("nameValue", value)}
        />
        <Input
          _placeholder="URL"
          onChangeText={(value) => handleInput("urlValue", value)}
        />
        <Button title="Adicionar" onPress={() => alert("Voce clicou!!!")} />
      </View>
    </View>
  );
};

export default Add;
