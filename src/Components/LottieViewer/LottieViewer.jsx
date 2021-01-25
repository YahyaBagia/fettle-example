import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";

const LottieViewer = ({ name }) => {
  useEffect(() => {
    animation.current.play();
  }, []);

  const animation = useRef();

  const getSource = () => {
    switch (name) {
      case "ProfileScreen":
        return require("../../../assets/LottieAnimations/ProfileScreen.json");
      case "LeaderBoardScreen":
        return require("../../../assets/LottieAnimations/LeaderBoardScreen.json");
      case "MentionsScreen":
        return require("../../../assets/LottieAnimations/MentionsScreen.json");
      default:
        break;
    }
    return undefined;
  };

  return (
    <LottieView
      ref={animation}
      style={{
        width: 300,
        height: 300,
      }}
      source={getSource()}
    />
  );
};

export default LottieViewer;
