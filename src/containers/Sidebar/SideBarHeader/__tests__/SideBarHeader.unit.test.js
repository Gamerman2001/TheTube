import React from "react";
import { shallow } from "enzyme";
import { SideBarHeader } from "../SideBarHeader";
import { Menu } from "semantic-ui-react";

describe("SideBarHeader", () => {
  test("should render SidebarHeader", () => {
    const wrapper = shallow(<SideBarHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with empty props.title", () => {
    const wrapper = shallow(<SideBarHeader title="" />);
    expect(wrapper).toMatchSnapshot();
  });
  test("renders with title passed", () => {
    const wrapper = shallow(<SideBarHeader title="Subscriptions" />);
    expect(wrapper).toMatchSnapshot();
  });
});
