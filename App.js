import MainContainer from "./navigation/MainContainer";
import { View, StyleSheet } from "react-native";
//11355543
export default function App() {
  return (
      <View style={styles.container}>
        <MainContainer />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});