import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define all available screens and their params (undefined means no params)
export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

// Define screen props type
export type NavigationProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

