import React from "react";
import { ScrollView, View } from "react-native";
import {
  Avatar,
  Drawer,
  Subheading,
  TouchableRipple,
} from "react-native-paper";
import Utils from "../Common/Utils";
import Container from "../Components/Container/Container";

const SideMenu = ({ navigation }) => {
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          paddingTop: Utils.isOnAndroid() ? 35 : undefined,
        }}
      >
        <Drawer.Section>
          <TouchableRipple
            style={{ flexDirection: "row", padding: 10 }}
            onPress={() => navigation.navigate("ProfileStack")}
          >
            <>
              <Avatar.Image
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGJveXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                }}
                size={60}
              />
              <View style={{ marginLeft: 8, justifyContent: "center" }}>
                <Subheading style={{ fontWeight: "bold", fontSize: 18 }}>
                  Yahya Bagia
                </Subheading>
                <Subheading style={{ fontSize: 13 }}>
                  yahya.bagia@gmail.com
                </Subheading>
              </View>
            </>
          </TouchableRipple>
        </Drawer.Section>
        <Drawer.Section>
          <Drawer.Item
            label={"Home"}
            icon={"shield-home"}
            onPress={() => navigation.navigate("HomeStack")}
          />
          <Drawer.Item
            label={"Leader Board"}
            icon={"trophy-variant-outline"}
            onPress={() => navigation.navigate("LeaderBoardStack")}
          />
          <Drawer.Item
            label={"Mentions"}
            icon={"monitor-star"}
            onPress={() => navigation.navigate("MentionsStack")}
          />
          <Drawer.Item
            label={"Profile"}
            icon={"shield-account"}
            onPress={() => navigation.navigate("ProfileStack")}
          />
        </Drawer.Section>
        <Drawer.Section>
          <Drawer.Item
            label={"Logout"}
            icon={"logout"}
            onPress={() => navigation.closeDrawer()}
          />
        </Drawer.Section>
      </ScrollView>
    </Container>
  );
};

export default SideMenu;
