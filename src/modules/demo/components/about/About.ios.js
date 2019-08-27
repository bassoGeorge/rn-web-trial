import React from "react";
import { Button, Text, View } from "react-native";
import { AboutContainerGen } from "./about.container";

export function AboutComponent({ title, subTitle, navigation }) {
  return (
    <View
      css={`
        padding: 30px;
      `}
    >
      <Text
        css={`
          font-size: 20px;
          color: blue;
        `}
      >
        {title} | About Page
      </Text>
      <Text>Some more text just to try out | {subTitle}</Text>
      <Button
        title="Deep navigation check"
        onPress={() =>
          navigation.navigate("Details", { name: "Deep check", id: 100 })
        }
      />
    </View>
  );
}

export const About = AboutContainerGen(AboutComponent);
export default About;
