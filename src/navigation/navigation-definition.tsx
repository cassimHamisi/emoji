import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabBar } from "../components";
import { EmojiOne, EmojiThree, EmojiTwo, SettingScreen } from "../pages";
import AddScreen from "../pages/add-screen";
import HomeScreen from "../pages/home-screen";
import { EmojiStackParamList, RootTabParamList } from "../types";

// Create navigators
const Tab = createBottomTabNavigator<RootTabParamList>();
const HomeStack = createNativeStackNavigator<EmojiStackParamList>();

// Home Stack Navigator
export function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="EmojiOne" component={EmojiOne} />
      <HomeStack.Screen name="EmojiTwo" component={EmojiTwo} />
      <HomeStack.Screen name="EmojiThree" component={EmojiThree} />
    </HomeStack.Navigator>
  );
}

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="AddTab" component={AddScreen} />
      <Tab.Screen name="SettingTab" component={SettingScreen} />
    </Tab.Navigator>
  );
}
