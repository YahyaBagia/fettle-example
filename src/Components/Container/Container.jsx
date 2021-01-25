import React from "react";
import { SafeAreaView } from "react-native";

const Container = ({ children, style }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#141414", flex: 1, ...style }}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
