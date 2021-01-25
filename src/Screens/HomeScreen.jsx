import React, { useLayoutEffect } from "react";
import { FlatList, Image, View } from "react-native";
import { Avatar, Divider, IconButton, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

import Container from "../Components/Container/Container";
import Data from "../Data/Data";
import { FettleColors } from "../Common/Const";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => [{ icon: "magnify", onPress: () => {} }],
    });
  });

  return (
    <Container>
      <FlatList
        data={Data}
        renderItem={({ item, index }) => <FlatListItem item={item} />}
        style={{ flex: 1 }}
        keyExtractor={(it, indx) => `${indx}`}
        ItemSeparatorComponent={() => (
          <Divider style={{ marginHorizontal: 12 }} />
        )}
      />
    </Container>
  );
};

const FlatListItem = ({ item }) => {
  const {
    username,
    userImage,
    time,
    type,
    details,
    location,
    comments,
    likes,
  } = item;

  const {
    questCompleted,
    competitorImage,
    title,
    distance,
    kcal,
    duration,
    postImage,
  } = details;

  return (
    <View style={{ margin: 8 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 8,
        }}
      >
        <Text>{username}</Text>
        <Avatar.Image
          source={{ uri: userImage }}
          size={35}
          style={{ marginHorizontal: 20 }}
        />
        <Text>{time}</Text>
      </View>

      {type === "questCompleted" && (
        <View
          style={{
            borderRadius: 20,
            borderColor: "#E3C830",
            borderWidth: 0.5,
            marginHorizontal: 20,
            marginVertical: 8,
          }}
        >
          <LinearGradient
            colors={FettleColors.questGradient}
            style={{
              height: 40,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Text>Completed Quest of the Week!</Text>
              <Image
                source={require("../../assets/HeartBeatIcon.png")}
                style={{ height: 25, width: 25 }}
              />
            </View>
          </LinearGradient>
        </View>
      )}

      {type === "bet" && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 8,
          }}
        >
          <Avatar.Image source={{ uri: userImage }} size={80} />
          <Avatar.Icon
            icon={"sword-cross"}
            style={{ backgroundColor: "transparent" }}
            color={FettleColors.tint}
            size={80}
          />
          <Avatar.Image source={{ uri: competitorImage }} size={80} />
        </View>
      )}

      {type === "workout" && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            borderRadius: 20,
            borderColor: FettleColors.secondary,
            borderWidth: 0.5,
            marginHorizontal: 20,
            marginVertical: 8,
            height: 40,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton
              icon={"road-variant"}
              size={30}
              color={FettleColors.secondary}
              style={{ margin: 0 }}
            />
            <Text style={{ color: "white" }}>{distance}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 8,
            }}
          >
            <IconButton
              icon={"fire"}
              size={30}
              color={FettleColors.secondary}
              style={{ margin: 0 }}
            />
            <Text style={{ color: "white" }}>{kcal} kcal</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton
              icon={"timer"}
              size={30}
              color={FettleColors.secondary}
              style={{ margin: 0 }}
            />
            <Text style={{ color: "white" }}>{duration}</Text>
          </View>
        </View>
      )}

      {type === "post" && (
        <Image
          source={{ uri: postImage }}
          style={{ height: 200, marginHorizontal: 8 }}
          resizeMode={"cover"}
        />
      )}

      {title && (
        <Text style={{ textAlign: "center", marginVertical: 4 }}>{title}</Text>
      )}

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconButton icon={"heart-outline"} size={15} style={{ margin: 0 }} />
          <Text>{likes}</Text>
        </View>
        <View style={{ width: 10 }} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconButton
            icon={"comment-text-multiple-outline"}
            size={15}
            style={{ margin: 0 }}
          />
          <Text>{comments}</Text>
        </View>
      </View>

      <Text style={{ textAlign: "center", marginVertical: 4 }}>
        -- {location} --
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <IconButton icon={"sword-cross"} size={25} style={{ margin: 0 }} />
        <IconButton icon={"feather"} size={25} style={{ margin: 0 }} />
        <IconButton icon={"share-variant"} size={25} style={{ margin: 0 }} />
      </View>
    </View>
  );
};

export default HomeScreen;
