import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1774F2",
    accent: "#0655BF",
  },
};

export const screenOptions = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: theme.colors.surface,
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "center",
};

export default theme;
