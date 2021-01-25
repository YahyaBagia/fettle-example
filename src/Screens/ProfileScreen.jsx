import React, { useLayoutEffect } from "react";

import Container from "../Components/Container/Container";
import LottieViewer from "../Components/LottieViewer/LottieViewer";

const ProfileScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Profile",
      headerRight: () => [{ icon: "pencil", onPress: () => {} }],
    });
  });

  return (
    <Container style={{ justifyContent: "center", alignItems: "center" }}>
      <LottieViewer name={"ProfileScreen"} />
    </Container>
  );
};

export default ProfileScreen;
