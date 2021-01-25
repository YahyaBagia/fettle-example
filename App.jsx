import React from "react";
import { Provider as PaperProvider, DarkTheme } from "react-native-paper";

import Navigation from "./src/Navigation/Navigation";

const App = () => {
  return (
    <PaperProvider theme={{ ...DarkTheme }}>
      <Navigation />
    </PaperProvider>
  );
};

export default App;
