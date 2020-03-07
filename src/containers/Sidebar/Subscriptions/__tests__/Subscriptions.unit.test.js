import React from "react";
import { shallow } from "enzyme";
import { Subscriptions } from "../Subscriptions";
import { Menu } from "semantic-ui-react";

describe("Subscriptions", () => {
  test("should render Subscriptions", () => {
    const wrapper = shallow(<Subscriptions />);
    expect(wrapper).toMatchSnapshot();
  });
});
