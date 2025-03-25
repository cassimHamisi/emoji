import { StyleSheet, Text, View } from "react-native";
import { HomeStackProps } from "../types";

export default function HomeScreen({ navigation }: HomeStackProps) {
  return (
    <View style={styles.container}>
      {/* Background Circles */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={{ maxHeight: "50%" }}>
        {/* <Image source={require("../assets/TopVector.png")} style={styles.image} /> */}
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Lets start by checking up on you!
        </Text>

        {/* Centered Emojis */}
        <View style={styles.emojiContainer}>
          <Text
            style={styles.emoji}
            onPress={() => navigation.navigate("EmojiOne")}
          >
            😊
          </Text>
          <Text
            style={styles.emoji}
            onPress={() => navigation.navigate("EmojiTwo")}
          >
            🙁
          </Text>
          <Text
            style={styles.emoji}
            onPress={() => navigation.navigate("EmojiThree")}
          >
            😦
          </Text>
        </View>
        <Text style={{ fontSize: 18, textAlign: "center" }}>
          Tell us how you are feeling
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  circle1: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 155,
    backgroundColor: "rgba(160, 227, 227, 0.5)",
    top: -270,
    right: 90,
    left: -20,
  },
  circle2: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 125,
    backgroundColor: "rgba(160, 227, 227, 0.5)",
    top: -180,
    right: 200,
    left: -120,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  emojiContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  emoji: {
    fontSize: 60,
    marginHorizontal: 15,
  },
});
