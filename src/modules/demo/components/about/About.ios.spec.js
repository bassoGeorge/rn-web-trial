import React from "react";
import { render } from "@testing-library/react-native";
import { AboutComponent } from "./About.ios";

it("just passes", () => {
  const { getByText } = render(
    <AboutComponent title="__title__" subTitle="__sub_title__" />
  );

  expect(
    getByText("Some more text just to try out | __sub_title__")
  ).toBeTruthy();
  expect(getByText("__title__ | About Page")).toBeTruthy();
  expect(getByText("Deep navigation check")).toBeTruthy();
});
