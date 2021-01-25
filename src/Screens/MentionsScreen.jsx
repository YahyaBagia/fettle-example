import React, { useLayoutEffect } from "react";

import Container from "../Components/Container/Container";
import LottieViewer from "../Components/LottieViewer/LottieViewer";

const MentionsScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Mentions",
      headerRight: () => [{ icon: "magnify", onPress: () => {} }],
    });
  });

  return (
    <Container style={{ justifyContent: "center", alignItems: "center" }}>
      <LottieViewer name={"MentionsScreen"} />
    </Container>
  );
};

export default MentionsScreen;
