import {
  NavigationProp,
  NavigationState,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type EmojiStackParamList = {
  EmojiOne: undefined;
  EmojiTwo: undefined;
  EmojiThree: undefined;
  Home: undefined;
};

//------------------SETTING STACK-----------------------------------------------------------------------------------------------------
export type HomeStackProps = NativeStackScreenProps<
  EmojiStackParamList,
  "Home"
>;

//--------------All screens must be registered under this stack list.
export type RootTabParamList = {
  HomeTab: NavigatorScreenParams<EmojiStackParamList>;
  AddTab: undefined;
  SettingTab: undefined;
};

export type RootNav = Omit<
  NavigationProp<ReactNavigation.RootParamList>,
  "getState"
> & {
  getState(): NavigationState | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}
