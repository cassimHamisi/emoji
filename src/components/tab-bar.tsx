import { FontAwesome } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const TabBar = (props: BottomTabBarProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.tabContainer} {...props}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("HomeTab", { screen: "Home" })}
      >
        <FontAwesome name="home" size={30} color="#4EC5C5" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("AddTab")}
      >
        <FontAwesome name="plus" size={30} color="#4EC5C5" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("SettingTab")}
      >
        <FontAwesome name="cog" size={30} color="#4EC5C5" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  tabButton: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
