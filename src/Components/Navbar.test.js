import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";

it("Renders all Component elements ", () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper.find(AppBar)).toHaveLength(1);
  expect(wrapper.find(Toolbar)).toHaveLength(1);
  expect(wrapper.find(IconButton)).toHaveLength(1);
  expect(wrapper.find(Typography)).toHaveLength(1);
});

it("Renders navbar title", () => {
  const wrapper = shallow(<Navbar />);
  const div = wrapper.find("div");
  const result = div.text();

  expect(result).toBe("Ticket Viewer");
});
