import { Text, View } from "react-native";

export function EmojiTwo({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center", marginHorizontal: 50, fontSize: 20 }}>
        "Neutrality is the calm lake of emotion—still, unrippled, and quietly
        observing life’s tides."
      </Text>
    </View>
  );
}
