import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./navigation-definition";

// Main App Component
export function RootNavigator() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
