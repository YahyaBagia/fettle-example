import { Platform, Dimensions } from "react-native";

export default class Utils {
  //#region - Platform Detection

  static isOniOS = () => Platform.OS === "ios";

  static isOnAndroid = () => Platform.OS === "android";

  static isOnWeb = () => Platform.OS === "web";

  static getScreenWidth = () => {
    return Dimensions.get("screen").width;
  };

  //#endregion
}
