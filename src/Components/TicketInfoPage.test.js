import React from "react";
import { shallow } from "enzyme";
import TicketInfoPage from "./TicketInfoPage";
import { Button, Grid } from "@material-ui/core";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), //mocks react-router-dom
  useParams: () => ({
    id: "123",
  }),
}));

it("Renders all Component elements ", () => {
  const wrapper = shallow(<TicketInfoPage />);
  expect(wrapper.find(Button)).toHaveLength(1);
  expect(wrapper.find(Grid)).toHaveLength(3);
});
