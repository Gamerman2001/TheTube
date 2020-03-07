import React from "react";
import { shallow } from "enzyme";
import { SideBarFooter } from "../SideBarFooter";
import { Menu } from "semantic-ui-react";

describe("SideBarFooter", () => {
  test("should render SidebarFooter", () => {
    const wrapper = shallow(<SideBarFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
