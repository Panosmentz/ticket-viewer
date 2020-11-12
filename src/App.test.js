import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import TicketsPage from "./Components/TicketsPage";
import TicketInfoPage from "./Components/LandingPage";
import toJson from "enzyme-to-json";

it("Renders Navbar", () => {
  const wrapper = shallow(<App />);
  const navbar = wrapper.find(Navbar);
  expect(navbar.exists()).toBe(true);
});

//create snapshots of the App and saves them in the _snapshots_ folder, can monitor changes
describe("snapshots", () => {
  it("App snapshots", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("Landing Page snapshots", () => {
    const landingPageTree = shallow(<LandingPage />);
    expect(toJson(landingPageTree)).toMatchSnapshot();
  });
  it("Navbar snapshots", () => {
    const navbarTree = shallow(<Navbar />);
    expect(toJson(navbarTree)).toMatchSnapshot();
  });
  it("Tickets Page snapshots", () => {
    const ticketsPageTree = shallow(<TicketsPage />);
    expect(toJson(ticketsPageTree)).toMatchSnapshot();
  });
  it("Ticket Info Page snapshots", () => {
    const ticketInfoPageTree = shallow(<TicketInfoPage />);
    expect(toJson(ticketInfoPageTree)).toMatchSnapshot();
  });
});
