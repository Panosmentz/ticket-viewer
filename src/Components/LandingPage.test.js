import React from "react";
import { shallow } from "enzyme";
import LandingPage from "./LandingPage";
import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";

//shallow rendering is used for unit testing. Adapter needs to be configured on setupTests.js

it("Renders all Component elements ", () => {
  const wrapper = shallow(<LandingPage />);
  expect(wrapper.find(Container)).toHaveLength(1);
  expect(wrapper.find(Avatar)).toHaveLength(1);
  expect(wrapper.find(Typography)).toHaveLength(1);
  expect(wrapper.find(TextField)).toHaveLength(2);
  expect(wrapper.find(Button)).toHaveLength(1);
});

it("Renders typography value correctly", () => {
  const wrapper = shallow(<LandingPage />);
  const typography = wrapper.find(Typography);
  const result = typography.text();
  expect(result).toBe("Authenticate");
});

it("Renders button value correctly", () => {
  const wrapper = shallow(<LandingPage />);
  const button = wrapper.find(Button);
  const result = button.text();
  expect(result).toBe("Authenticate");
});
