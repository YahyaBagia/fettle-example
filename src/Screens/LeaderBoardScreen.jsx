import React, { useLayoutEffect } from "react";

import Container from "../Components/Container/Container";
import LottieViewer from "../Components/LottieViewer/LottieViewer";

const LeaderBoardScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Leaderboard",
      headerRight: () => [{ icon: "magnify", onPress: () => {} }],
    });
  });

  return (
    <Container style={{ justifyContent: "center", alignItems: "center" }}>
      <LottieViewer name={"LeaderBoardScreen"} />
    </Container>
  );
};

export default LeaderBoardScreen;
