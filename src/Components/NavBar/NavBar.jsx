import React from "react";
import { Image, Keyboard, View } from "react-native";
import { Appbar, Badge } from "react-native-paper";
import Utils from "../../Common/Utils";

const NavBar = ({ navigation, scene, previous }) => {
  const { title, headerSubtitle, headerRight } = scene.descriptor.options;
  const subtitle = headerSubtitle !== undefined ? headerSubtitle() : "";
  const rightButtons = headerRight !== undefined ? headerRight() : [];

  return (
    <Appbar.Header style={{ backgroundColor: "#000000" }}>
      {previous ? (
        Utils.isOniOS() ? (
          <Appbar.Action
            icon={"keyboard-backspace"}
            onPress={navigation.goBack}
            size={30}
          />
        ) : (
          <Appbar.BackAction onPress={navigation.goBack} />
        )
      ) : (
        <Appbar.Action
          icon={"menu"}
          onPress={() => {
            Keyboard.dismiss();
            navigation.openDrawer();
          }}
          size={Utils.isOniOS() ? 30 : undefined}
        />
      )}
      {title ? (
        <Appbar.Content title={title} subtitle={subtitle} />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../../assets/logo.png")}
            style={{ height: 35 }}
            resizeMode={"contain"}
          />
        </View>
      )}
      {rightButtons.map(({ icon, onPress, ref, badge }, index) => (
        <View key={index}>
          <Appbar.Action
            icon={icon}
            onPress={onPress}
            color={"white"}
            ref={ref}
          />
          {badge && (
            <Badge
              visible
              size={1}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                width: 10,
                height: 10,
                borderWidth: 1.2,
                borderColor: "white",
                borderRadius: 5,
              }}
            />
          )}
        </View>
      ))}
    </Appbar.Header>
  );
};

export default NavBar;
