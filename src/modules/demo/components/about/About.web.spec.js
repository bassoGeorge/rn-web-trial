import React from "react";
import { render } from "@testing-library/react";
import { AboutComponent } from "./About.web";

jest.mock("react-router-dom", () => ({
  Link: props => <a href={props.to}>{props.children}</a>
}));

it("just works", () => {
  const { getByText } = render(
    <AboutComponent title="__title__" subTitle="__sub_title__" />
  );

  expect(
    getByText("Some more text just to try out | __sub_title__")
  ).toBeTruthy();
  expect(getByText("__title__ | About Page")).toBeTruthy();
  expect(getByText("Deep link")).toBeTruthy();
});
