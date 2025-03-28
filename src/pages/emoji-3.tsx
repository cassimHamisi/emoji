import { Text, View } from "react-native";

export function EmojiThree({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center", marginHorizontal: 50, fontSize: 20 }}>
        "A frown is the heart’s whisper, a quiet storm that dims the light but
        never extinguishes it."
      </Text>
    </View>
  );
}
