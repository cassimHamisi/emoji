import { Text, View } from "react-native";

export function EmojiOne({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center", marginHorizontal: 50, fontSize: 20 }}>
        "A smile is the soul’s sunshine, melting shadows and painting the world
        in warmth."
      </Text>
    </View>
  );
}
