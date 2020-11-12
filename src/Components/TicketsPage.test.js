import React from "react";
import { shallow } from "enzyme";
import TicketsPage from "./TicketsPage";
import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

it("Renders all Component elements ", () => {
  const wrapper = shallow(<TicketsPage />);
  expect(wrapper.find(Grid)).toHaveLength(1);
  expect(wrapper.find(TableContainer)).toHaveLength(1);
  expect(wrapper.find(Table)).toHaveLength(1);
  expect(wrapper.find(TableHead)).toHaveLength(1);
  expect(wrapper.find(TableRow)).toHaveLength(1);
  expect(wrapper.find(TableBody)).toHaveLength(1);
  expect(wrapper.find(TablePagination)).toHaveLength(1);
});
